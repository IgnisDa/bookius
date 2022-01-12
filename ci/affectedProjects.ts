/**
 * This script runs on the assumption that each of the servers have an API route which
 * returns the `GIT_REV` hash it was deployed with. This script uses that and the
 * `nx affected:apps` command to determine whether an app needs to be re-deployed.
 */

// This is probably the most clever solution I have ever come up to a real world problem
// and looking at it makes me genuinely proud of myself.

import axios from 'axios';
import { execSync } from 'child_process';

const APPS = [
  {
    name: 'server',
    endpoint: 'https://bookius-server.ignisda.tech/git-rev',
  },
  {
    name: 'site',
    endpoint: 'https://bookius.ignisda.tech/api/git-rev',
  },
];

const main = async () => {
  const affectedProjects = []; // the projects that need to be deployed
  for (const toBePossiblyDeployedApp of APPS) {
    try {
      const { data } = await axios.get<{ GIT_REV: string }>(
        toBePossiblyDeployedApp.endpoint,
        {
          headers: { 'User-Agent': 'gh-actions-automated-script' },
        }
      );
      const command = `pnpx nx affected:apps --base="${data.GIT_REV}" --head=HEAD --plain`;
      const isAffected = execSync(command)
        .toString()
        .trim()
        .split(' ')
        .filter(Boolean)
        .includes(toBePossiblyDeployedApp.name);
      if (isAffected) affectedProjects.push(toBePossiblyDeployedApp.name);
    } catch {
      // the endpoint returned an error, ignore it, we will debug it **later**
      // (as if lol)
      continue;
    }
  }
  console.log(affectedProjects);
};

main().then().catch(console.error);

import { execSync } from 'child_process';

const main = async () => {
  const affectedProjects = execSync(
    `pnpx nx affected:apps --base=$(git log --format="%H" -n 1) --plain`
  )
    .toString()
    .trim()
    .split(' ')
    .filter(Boolean);
  console.log(affectedProjects);
};

main().then().catch(console.error);

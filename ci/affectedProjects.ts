import { execSync } from 'child_process';

const main = async () => {
  const affectedProjects = execSync(
    `pnpx nx affected:apps --base=main~1 --head=main --plain`
  )
    .toString()
    .trim()
    .split(' ')
    .filter(Boolean);
  console.log(affectedProjects);
};

main().then().catch(console.error);

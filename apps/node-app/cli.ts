import { createProjectGraphAsync } from '@nrwl/devkit';

createProjectGraphAsync().then((projectGraph) => {
  console.log(projectGraph);
});

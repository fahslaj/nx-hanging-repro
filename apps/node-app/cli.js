"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devkit_1 = require("@nrwl/devkit");
(0, devkit_1.createProjectGraphAsync)().then((projectGraph) => {
    console.log(projectGraph);
});

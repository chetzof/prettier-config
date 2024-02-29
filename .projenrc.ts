import { TypeScriptProject } from '@vladcos/projen-base'

const project = new TypeScriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@vladcos/projen-base'],
  name: '@vladcos/prettier-config',
  projenrcTs: true,
  releaseToNpm: true,
  mutableBuild: true,
  packemon: false,
  projenDevDependency: false,
  repository: 'https://github.com/vladcosorg/prettier-config',
})
project.compileTask.reset(
  `mkdir ${project.libdir} &&  cp src/index.js  ${project.libdir}/index.js`,
)
project.package.addField('prettier', './src/index.js')

project.synth()

import { CustomTypescriptProject } from '@vladcos/projen-base'

const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@vladcos/projen-base'],
  name: '@vladcos/prettier-config',
  projenrcTs: true,
  releaseToNpm: true,
  mutableBuild: true,
  peerDeps: ['prettier'],
})
project.compileTask.reset(
  `mkdir ${project.libdir} &&  cp src/index.js  ${project.libdir}/index.js`,
)
project.package.addField('prettier', './src/index.js')

project.synth()

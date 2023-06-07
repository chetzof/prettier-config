import { CustomTypescriptProject } from '@chetzof/projen-base'

const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@chetzof/projen-base'],
  name: '@chetzof/prettier-config',
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

const apis = require('electron-api-docs')
const pkg = require('./package.json')

console.log(`
# ${pkg.name}

> ${pkg.description}
`)

apis.forEach(api => {
  const methods = api.methods || []
  const instanceMethods = api.instanceMethods || []

  methods
    .filter(method => method.signature.match('callback'))
    .forEach(method => {
      const {name, signature} = method
      console.log(`- [ ] [${api.name}.${name}${signature}](${api.repoUrl}#${name})`)
    })

  instanceMethods
    .filter(method => method.signature.match('callback'))
    .forEach(method => {
      const {name, signature} = method
      console.log(`- [ ] [${api.instanceName}.${name}${signature}](${api.repoUrl}#${name})`)
    })
}) 

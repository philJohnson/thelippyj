const path = require(`path`)
const glob = require(`glob`)

const createContentTypes = require(`./create/createContentTypes.js`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.jsx`, { cwd: sitePath })
}

exports.createPages = async (props) => {
  const templates = getTemplates()
  await createContentTypes(props, { templates })
}

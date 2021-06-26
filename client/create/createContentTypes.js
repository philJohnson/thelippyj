const { toCamelCaseString } = require("../src/utils");

const { resolve } = require(`path`);

module.exports = async ({ actions, graphql }, options) => {
  const { templates } = options;

  const contentTypeTemplates = templates.filter((path) =>
    path.includes(`./src/templates/`)
  );

  const { data } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
        nodes {
          id
          nodeType
          template {
            templateName
          }
          slug
          nodeType
          uri
          ... on WpPage {
            isFrontPage
            isPostsPage
          }
        }
      }
    }
  `);
  const { allWpContentNode } = data;

  await Promise.all(
    allWpContentNode.nodes.map(async (node, i) => {
      const {
        template: { templateName },
        nodeType,
        isPostsPage,
      } = node;
      
      let template = `./src/templates/default/index.jsx`; //set default template
      let contentTypeTemplate = false;

      if (templateName && toCamelCaseString(templateName) == "default") {
        //check if template for post type exists
        contentTypeTemplate = contentTypeTemplates.find(
          (path) =>
            path === `./src/templates/${toCamelCaseString(nodeType)}/index.jsx`
        );
      }
      if (!contentTypeTemplate && templateName) {
        //check if template for template name exists
        contentTypeTemplate = contentTypeTemplates.find(
          (path) =>
            path ===
            `./src/templates/${toCamelCaseString(templateName)}/index.js`
        );
      }
      if(isPostsPage) {
        contentTypeTemplate = `./src/templates/blogPosts/index.jsx`; //set default template
      }
      if (contentTypeTemplate) {
        template = contentTypeTemplate; //overwrite default template
      }
      await actions.createPage({
        component: resolve(template),
        path: node.isFrontPage ? "/" : node.uri,
        context: {
          id: node.id,
          nextPage: (allWpContentNode.nodes[i - 1] || {}).id,
          previousPage: (allWpContentNode.nodes[i + 1] || {}).id,
        },
      });
    })
  );
};

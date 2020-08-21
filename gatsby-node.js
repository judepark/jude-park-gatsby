const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const pathMap = {
  note: "notes",
  work: "works"
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type !== "MarkdownRemark") {
    return
  }

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  const slug = createFilePath({
    node,
    getNode,
    basePath: pathMap[source]
  })
  createNodeField({
    node,
    name: "slug",
    value: `/${source}${slug}`
  })
  createNodeField({
    node,
    name: "template",
    value: source
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              template
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.template}.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        template: node.fields.template
      }
    })
  })
}

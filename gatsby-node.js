const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Adicionar campo slug para cada curso
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // veridicar se o posto é markdownRemark
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `${slug}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
{
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/cursos-post.js"),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}
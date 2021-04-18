const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    query {
        allMdx {
            edges {
              node {
                id
                slug
              }
            }
          }
    }
  `)
    console.log(JSON.stringify(result, null, 4))
    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/pages/blog-post.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug,
            },
        })
    })

}
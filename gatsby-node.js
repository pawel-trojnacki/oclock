const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query getProducts {
      products: allStrapiProduct {
        nodes {
          id
        }
      }
    }
  `);

  result.data.products.nodes.forEach(({ id }) => {
    createPage({
      path: `/products/${id}`,
      component: path.resolve(`src/templates/ProductTemplate.js`),
      context: {
        slug: id,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

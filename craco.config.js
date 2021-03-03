const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#009F7F','@success-color':'#009F7F' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
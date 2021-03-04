const CracoLessPlugin = require('craco-less');
const cracoLessResourcesLoader = require('craco-plugin-style-resources-loader')
const path = require('path')
module.exports = {
  webpack:{
    alias:{
      '@':path.resolve('src')
    }
  },
  babel:{
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      ["@babel/plugin-proposal-decorators", { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#009F7F' ,'@link-color': '#1DA57A'},
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: cracoLessResourcesLoader,
      options: {
        patterns:[
          path.join(__dirname, 'src/static/css/global.sass'),
          path.join(__dirname, 'src/static/css/container.sass')
        ],
        styleType:'sass'
      }
    },
  ],
};
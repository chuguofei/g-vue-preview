const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.conf')


module.exports = merge(baseWebpackConfig, {
    entry: {
        app: './src/index.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'g-vue-preview.js',
        publicPath: "/dist/",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
})
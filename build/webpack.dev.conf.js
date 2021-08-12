const path = require('path')
const { merge } = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')


module.exports = merge(baseWebpackConfig,{
    entry: {
        app: './public/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
})
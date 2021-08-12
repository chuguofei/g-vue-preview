const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const devtool = env === 'production' ? 'source-map' : 'eval-source-map'


module.exports = {
    mode: env,
    devtool,
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    devServer: {
        contentBase: "/",
        port: 3000,
        hot: true,
        clientLogLevel: 'none',
        open: false
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new UglifyJsPlugin(),
    ]
}
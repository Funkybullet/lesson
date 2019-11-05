const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin');
// const { cleanwebpackPlugin } = require('clean-webpack-Plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',//prodution,
entry:{
    bundle: path.resolve(__dirname,'./src/index.js')
},
output: {
    path: path.resolve(__dirname,'./build'),
    filename:'[name].[hash:5].js'
},
    resolve: {
        extensions: ['.vue','.js','.jsx'],
        alias: {
            '@':path.resolve(__dirname,'./src/')
        }
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins: [
        new VueloaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html')
        })
    ]
}
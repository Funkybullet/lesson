const path = require('path');
module.exports = {
    entry:'./src/index',
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename:'[name].js',

    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: "eslint-loader"
            },
            {
                test:/\.jsx?$/,  //问号代表着匹配0次或1次
                include:[
                    path.resolve(__dirname,'./src')
                ],
                use:'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname,'node_modules')
        ]
    }
}
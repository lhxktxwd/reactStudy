const path = require('path');
const webpack = require('webpack');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = { //注意这里是exports不是export
    devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map
    entry:  [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        // 这里reload=true的意思是，如果碰到不能hot reload的情况，就整页刷新。
        path.resolve(__dirname, 'app/index.js')
      ], //唯一入口文件
    output: { //输出目录
        path: __dirname + "/build", //打包后的js文件存放的地方
        filename: 'bundle.js', //打包后的js文件名
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
            loader: 'babel-loader'
            //npm install babel-loader 
            //npm install babel-core
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        // 启用热替换,仅开发模式需要
      ]
};
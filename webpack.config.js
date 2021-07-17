const path = require('path');
const webpack  = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'cbti',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    entry: {
        app: ['./src/CBTI'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel'],
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(gif|svg|jpg|png)$/,
            loader: 'file-loader',
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new RefreshWebpackPlugin,
        new webpack.HotModuleReplacementPlugin(),
      ],
    
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'     // 라우트를 사용할 수 있게 해주는 코드 원래는 '/dist/'였다.
    },
    devServer: {
        historyApiFallback: true,       // 라우트를 사용할 수 있게 해주는 코드
        publicPath: '/dist/',
        hot: true, 
    },

};

// 라우트를 사용하기 위한 웹팩 설정 : https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
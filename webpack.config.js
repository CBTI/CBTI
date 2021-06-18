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
        publicPath: '/dist/'
    },
    devServer: {
        publicPath: '/dist/',
        hot: true, 
    },

};
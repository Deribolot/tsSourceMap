const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        first: './src/index.ts',
        second: './src/index2.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.ts$|tsx$/,
                use: 'ts-loader',
                exclude: /node-modules/,
            }
        ]
    },
    resolve:{
        extensions: ['.tsx', '.ts', '.jsx', '...'],
    },
    plugins: [new HtmlWebpackPlugin({})]
};
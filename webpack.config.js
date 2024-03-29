const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './',
        client: {
            logging: 'error',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            template: './src/index.html',
            favicon: './src/images/favicon.png'
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './'),
        clean: false,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(pdf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.(png)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            }
        ],
    },
};
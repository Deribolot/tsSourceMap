const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = (env, argv) => {
    console.log(argv.mode, process.env.NODE_ENV)
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';

    return {
        mode,
        entry: {
            first: path.join(__dirname, 'src', 'index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true
        },
        devtool: isProduction ? 'nosources-source-map' : 'source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                    ]
                },
                {
                    test: /\.less$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    globalVars: {
                                        color1: 'rgb(0, 92, 188)'
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.js$|jsx$/,
                    use: ['babel-loader'],
                    exclude: /node-modules/,
                },
                {
                    test: /\.ts$|tsx$/,
                    use: ['ts-loader'],
                    exclude: /node-modules/,
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource'
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
            extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
            extensionAlias: {
            }
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') })
        ]
    };
};
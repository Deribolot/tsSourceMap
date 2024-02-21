const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');



//uglify
//линтеры
// сторибук
// моки 

/*
TypeScript
Use the fork-ts-checker-webpack-plugin for typechecking in a separate process.
Configure loaders to skip typechecking.
Use the ts-loader in happyPackMode: true / transpileOnly: true.
 */

const darkColor = '45, 58, 78';
const lightColor = '206, 197, 182';

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';

    return {
        //    resolve: { modules: [path.resolve(__dirname, 'src'), 'node_modules'] },
        mode,
        entry: {
            index: path.join(__dirname, 'src', 'index.tsx'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
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
                    ],
                    exclude: /node-modules/,
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
                                        primaryColor: 'rgb(127, 164, 219)',
                                        themeColor: `rgb(${env.theme === 'dark' ? darkColor : lightColor})`,
                                        'themeColor-transparent': `rgba(${env.theme === 'dark' ? darkColor : lightColor}, 0.8)`,
                                        mainColor: `rgb(${env.theme === 'dark' ? lightColor : darkColor})`,
                                        'mainColor-transparent': `rgba(${env.theme === 'dark' ? lightColor : darkColor}, 0.8)`,
                                        fontSize: '30px',
                                        lineHeight: '36px',
                                        buttonFontWeight: '800',
                                        fontWeight: '400',
                                        borderRadius: '8px',
                                        borderWidth: '2px',
                                        padding: '12px',
                                        paddingLg: '24px',
                                    }
                                }
                            }
                        }
                    ],
                    exclude: /node-modules/,
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
                    exclude: /node-modules/,
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    exclude: /node-modules/,
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
            extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
            symlinks: false,
            cacheWithContext: false,
        },
        optimization: {
            moduleIds: 'deterministic',
            minimizer: [
                new CssMinimizerPlugin(),
            ],
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'initial',
                    },
                },
            },
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
        ],
        ...env.stats ? { stats: 'detailed' } : {},
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    };
};
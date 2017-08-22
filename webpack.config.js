const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'env', {
                                        browsers: ['last 2 versions', 'ie >= 10']
                                    }
                                ]
                            ],
                            plugins: [
                                require('babel-plugin-transform-object-rest-spread')
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.hbs$/,
                use: [
                    {
                        loader: 'webpack-atomizer-loader',
                        options: {
                            configPath: path.resolve(__dirname, 'atomicCssConfig.js')
                        }
                    },
                    'handlebars-loader'
                ]
            },
            {
                test: /\.yaml$/,
                loaders: [ 'json-loader', 'yaml-loader' ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.woff$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('./src/'),
            'templates': path.resolve('./src/templates'),
            'data': path.resolve('./src/data'),
            'css': path.resolve('./src/css')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            links: [
                'atomic.css'
            ],
            title: 'Atomic CSS Workshop'
        }),
        new ExtractTextPlugin('styles.css')
    ]
}

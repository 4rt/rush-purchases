const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (prev, env) => {

    const getOptimization = () => {
        return {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 5
                    },
                    extractComments: false
                })
            ]
        };
    };

    return {
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        optimization: getOptimization(),
        watchOptions: {
            ignored: /node_modules/
        },
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader'
                        }
                    ]
                },
            ]
        },
        resolve: {
            extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
        },
        plugins: [
            new webpack.DefinePlugin({
                process: {
                    env: {
                        development: env.mode === 'development',
                        appId: 489773
                    }
                }
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            host: 'localhost',
            port: 8080,
            historyApiFallback: true,
        }
    }
};

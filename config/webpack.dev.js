const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    output: {
        filename: 'index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        hot: true,
        port: 9000,
        historyApiFallback: true,
        open: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    }
});
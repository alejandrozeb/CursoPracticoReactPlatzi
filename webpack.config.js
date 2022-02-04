const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output:{
        path: path.resolve(--dirname, dist),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js', '.jsx'],
    },
    module:{
        rules:[
            {
                text: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.htlm$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    Plugin:[
        new HtmlWebpackPlugin({
            template: '/public/index.html',
            filename: './index.hmtl'
        })
    ]
}
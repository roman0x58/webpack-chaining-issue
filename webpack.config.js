const webpack = require('webpack')
const path = require('path')

module.exports = {
    context: __dirname,
    entry: "./index.ts",
    output: {
        path: __dirname,
        filename: "output.js"
    },
    resolve: {
        extensions: [".ts", ".gql"]
    },
    resolveLoader: {
       modules: ['node_modules', path.resolve(__dirname, "./loader")],
    },
    module: {
        rules: [
            {
                test: /\.gql$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.gql$/]
                        }
                    },
                    {
                        loader: path.resolve(__dirname, "./loader/loader.js")
                    }
                ]
            },
            {
                test: /\.ts/, loader: "ts-loader", exclude: /node_modules/,
            },
        ]
    }
};

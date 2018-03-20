const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader",
                    options: {
                        sourceMap: true
                    }

                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"],
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [],
    devtool: 'cheap-eval-source-map' // remove for build
};
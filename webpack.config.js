var path = require('path');
module.exports = {
    entry: './public/src/main.js',
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },
            {test: /\.png$/, loader: "file-loader"},
            {test: /\.jpg$/, loader: "file-loader"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
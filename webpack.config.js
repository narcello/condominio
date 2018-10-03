const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }]
          }]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
      },
    
};
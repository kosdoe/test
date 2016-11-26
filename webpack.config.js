/**
 * Created by Konstantin on 26.11.2016.
 */
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.less/,
                loader:'style!css!less'
            }
        ]
    }





};

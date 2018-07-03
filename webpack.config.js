var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/Welcome.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Welcome.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            }
        ]
    }
}
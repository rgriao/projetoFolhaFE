var path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    module: {
        rules: [
            {                      
                test: /\.(jpe?g|gif|png|ico)$/,
                exclude: [/node_modules/],
                use: ['file-loader?name=[name].[ext]'],

                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['react', 'es2015']
                    }
                }                
            }
        ]
    }   
};
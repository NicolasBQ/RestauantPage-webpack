

module.exports={
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,   
                use:["style-loader", "css-loader", "sass-loader"],
            }
        ]       
    }
};

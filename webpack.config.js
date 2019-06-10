const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env)=>{ 
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css');
return{
    entry: './src/app.js',
    mode: 'none',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
    {
        test:/\.s?css$/,
        use:CSSExtract.extract({
            use:[
                {
                    loader:'css-loader',
                    options:{
                        sourceMap:true
                    }
                },
               {
                   loader:'sass-loader',
                   options:{
                    sourceMap:true
                }
               }
            ]
        })
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        use:'file-loader?name=[name].[ext]&outputPath=images/',


    }


]

    },
    plugins:[
        CSSExtract
    ],
    devtool:isProduction ? 'source-map' : 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname, 'public'),
        historyApiFallback:true
    }

}
}


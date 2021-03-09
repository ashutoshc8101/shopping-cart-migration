const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  path.resolve(__dirname, 'src/app/main.ts'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: ['ts-loader', 'angular2-template-loader',]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
                        {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            {
                test: /\.(eot|ttf)$/,
                loader: "file-loader",
            },
            {
                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000']
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: [
                {
                    loader: 'raw-loader',
                    options: {
                        esModule: false
                    }
                }
                ],
            },
       ]
    },

    mode: 'development',
    devServer: {
        port: 4200
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  externals: {
      jquery: 'jQuery'
  }
}
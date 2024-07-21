const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(glsl|vs|fs|frag|vert)$/,
                use: [
                    'raw-loader',
                    'glslify-loader'
                ],
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.glsl', '.frag', '.vert']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true, // サーバー起動時にブラウザを自動で開くオプション
    },
};
//sirve para identificar la ruta de donde se encuentra este archivo
const path = require('path');

//Este plugin Me permite trabajar con documentos html
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Sirve para extraer el codigo css, minificarlo y optimizarlo. Ademas lo agrega como parte del head
const miniCssExtractPlugin = require('mini-css-extract-plugin');

//Nos permite compiar archivos de una ruta a otra
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//funcion de flecha, su ventaja es que no tiene en cuenta el contexto
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'; // si la variable argv tiene la propiedad mode y es identico a production esto va a retornan un booleano

    // vamos a retornar un objeto
    return {
        entry: {
            //tener archivos principales que webpack va a estar escuchando, uno es el index.js
            index: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader', //if ternario
                        'ccs-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src/assets/js'),
                    use: {
                        loader: 'babel-loader', //permite cargar el codigo de java script y transpilar
                        options: {
                            presets: ['@babel/preset-env']
                        } 
                    }
                }
            ]
        },
        plugings: [],
        devServer: {
            //servidor para escuchar los cambios
            //trabajar con archivos staticos
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            open: true,
            hot: true,
            watchFiles: [
                'src/**/*'
            ]
        }
    }
}


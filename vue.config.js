// vue.config.js

const path = require('path');
const configureWebpack = require('./webpack.config.js');

module.exports = {
    configureWebpack,
    outputDir: path.resolve(__dirname, 'dist'),
    chainWebpack: (config) => {
        config.optimization.delete('splitChunks');
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
        config.module.rule('eslint').use('eslint-loader').options({
            fix: false,
        });
    },
    // dll: true,
    css: {
        extract: false,
    }
};

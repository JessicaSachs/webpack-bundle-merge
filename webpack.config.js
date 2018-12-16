const glob = require('glob');

function getAllBundleNames() {
    const bundlePattern = './bundles/**/*.js';
    const jsFiles = glob.sync(bundlePattern);

    const result = {};

    jsFiles.forEach((f) => {
        result[f] = f;
    });

    return result;
}

module.exports = {
    entry: getAllBundleNames(),
    output: {
        filename: '[name]',
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false,
                        minimize: true,
                        collapseWhitespace: true,
                        removeComments: true,
                        conservativeCollapse: false,
                        collapseInlineTagWhitespace: false,
                    },
                },
            }
        ],
    },
};


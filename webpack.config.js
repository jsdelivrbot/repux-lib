const path = require('path');

module.exports = {
    entry: {
        ['lib/index']: ['./src/repux-lib.js'],
        ['tests/index']: ['./test/run.js']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        library: 'repux-lib',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [/node_modules\/promisify-es6/],
                use: [ {
                    loader: 'babel-loader',
                    query: {
                        presets: [ 'env' ]
                    }
                } ]
            }
        ]
    }
};

const rootDir = process.env.TRANSPILE_OUTPUT_DIR;
const transpileMode = process.env.TRANSPILE_MODE;

console.log("OUTPUT  >>>>>>>>>>>>>>>>> " + rootDir);
console.log("MODE    >>>>>>>>>>>>>>>>> " + transpileMode);

module.exports = {

    entry: {
        main: './src/js/index.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },


    output: {
        path: rootDir
    },

    mode: transpileMode

};
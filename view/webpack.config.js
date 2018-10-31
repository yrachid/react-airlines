const rootDir = process.env.TRANSPILE_OUTPUT_DIR;
const transpileMode = process.env.TRANSPILE_MODE;

console.log("OUTPUT  >>>>>>>>>>>>>>>>> " + rootDir);
console.log("MODE    >>>>>>>>>>>>>>>>> " + transpileMode);

module.exports = {

    entry: {
        main: './main.js'
    },

    output: {
        path: rootDir
    },

    mode: transpileMode

};
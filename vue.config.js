// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost',
                ws: true,  
                changeOrigin: true,  
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    },

    publicPath: undefined,
    outputDir: undefined,
    assetsDir: 'static',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
};
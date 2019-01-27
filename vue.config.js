// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:80',
                // target: 'http://180.76.249.27:80/ai',
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
// vue.config.js
module.exports = {
    devServer: {
        port: 8888,
        host: "0.0.0.0",
        proxy: {
            '/api': {
                target: 'http://localhost:80',
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

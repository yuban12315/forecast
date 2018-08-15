//vue.config.js

module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 4000,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changOrigin: true
            },
            '/testApi': {
                target: 'http://localhost:8080',
                ws: true,
                changOrigin: true
            },
        }
    }
}

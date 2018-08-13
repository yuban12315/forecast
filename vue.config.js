//vue.config.js

module.exports={
    devServer: {
        port:3000,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}

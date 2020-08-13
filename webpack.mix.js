const mix = require('laravel-mix')
require('vuetifyjs-mix-extension')
require('laravel-mix-alias')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .alias({
        '@': '/resources/js',
        '~': '/resources/sass',
        '@components': '/resources/js/components',
    })
    // https://ptsp-kalbar.test:3000
    .browserSync({
        proxy: 'ptsp-kalbar.test'
    })
    .js('resources/js/app.js', 'public/js')
    .vuetify('vuetify-loader')
    .sass('resources/sass/app.scss', 'public/css')

// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'assets/js').setPublicPath('assets')
    .sass('src/scss/styles.scss', 'assets/css').setPublicPath('assets')
    .browserSync('my-domain.test');

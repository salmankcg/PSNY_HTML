// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist').setPublicPath('dist')
    .sass('src/scss/styles.scss', 'dist').setPublicPath('dist')
    .browserSync('my-domain.test');

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
.sass('src/css/app.scss', 'css')
.copyDirectory('src/img', 'dist/img')
.setPublicPath('dist');
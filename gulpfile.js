const {src, dest, series, watch} = require('gulp');
const concat =require('gulp-concat');
const htmlMin = require ('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const svgSprite = require ('gulp-svg-sprite');
const image = require ('gulp-image');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () =>{
    return del(['dist'])
};

const fonts =() =>{
    return src ([
        'src/fonts/**/*.woff',
    'src/fonts/**/*woff2',
    'src/fonts/**/*ttf'])
    .pipe(dest('dist/fonts'))
}


const resources = () =>{
    return src('src/resources/**')
    .pipe(dest('dist'))
};

const styles =() =>{
    return src('src/styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level:2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const htmlMinify =() =>{
    return src ('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: false,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const images = () =>{
    return src([
        'src/images/**/*.jpg',
        'src/images/**/*.jpeg',
        'src/images/**/*.png',
        'src/images/*.svg',
        'src/images/*.webp'
        
    ])
    .pipe(image())
    .pipe(dest('dist/images'))
};

const svgSprites = () =>{
    return src ('src/images/svg/**/*.svg')
    .pipe(svgSprite({
        mode:{
            stack:{
                sprite:'../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/images'))
};

const scripts = () =>{
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const php = () =>{
    return src(
        'src//**/*.php',
    )
   
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
};

const watchFiles = () =>{
    browserSync.init({
server:{
    baseDir:'dist'
}
    });
};

watch('src/**/*.html', htmlMinify);
watch('src/styles/**/*.css', styles);
watch('src/images/svg/**/*.svg', svgSprites);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resources);

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, resources, htmlMinify, scripts, php, styles, images, fonts, svgSprites, watchFiles)



const htmlMinifyBuild =() =>{
    return src ('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
};

const stylesBuild =() =>{
    return src('src/styles/**/*.css')
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level:2
    }))
    .pipe(dest('dist'))
};

const fontsBuild =() =>{
    return src ([
        'src/fonts/**/*.woff',
    'src/fonts/**/*woff2'])
    .pipe(dest('dist/fonts'))
}

const phpBuild =() =>{
    return src (
        ['src/**/*.php',
    '**/*.php'])
    .pipe(dest('dist'))
}



const scriptsBuild = () =>{
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist'))
};



exports.build = series(clean, resources, htmlMinifyBuild, scriptsBuild, stylesBuild, images, phpBuild, fontsBuild, svgSprites);

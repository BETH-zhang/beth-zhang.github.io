const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('image-min', () =>
    gulp.src('images/*')
	    .pipe(imagemin({
	        progressive: true,
	        use: [pngquant({ quality: '65-80' })]
	    }))
	    .pipe(gulp.dest('img'))
	);

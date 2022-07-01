import svgSprive from 'gulp-svg-sprite'



export const svgSprite = () => {
  return app.gulp.src('src/svgicons/sprite.svg', {}) 
    .pipe(app.gulp.dest(app.path.build.images))
}

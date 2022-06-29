import webpack from 'webpack-stream'
import uglify from 'gulp-uglify'


export const scripts = () => {
  return app.gulp.src([
    app.path.src.js   
  ])
    .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'JS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(webpack({
      mode: app.isBuild ? 'production' : 'development',
      output: {
        filename: 'main.min.js'
      }
    }))
    // .pipe(app.plugins.concat('main.min.js'))
    .pipe(app.plugins.babel({
      presets: ['@babel/env'] 
    }))
    
   
    .pipe(app.plugins.sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream())
}
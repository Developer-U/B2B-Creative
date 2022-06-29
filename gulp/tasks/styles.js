
import cssmin from 'gulp-css-minify'
import cleanCss from 'gulp-clean-css'  
import autoprefixes from 'gulp-autoprefixer'
import webpcss from 'gulp-webpcss'
import concat from 'gulp-concat'
import groupCssMediaQueries from 'gulp-group-css-media-queries'


export const styles = () => {
  return app.gulp.src(app.path.src.scss)
    .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.init()))   
  
    .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))

    .pipe(concat('main.css'))

    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp',
    }))    

    .pipe(cssmin())
    
    .pipe(app.plugins.if(app.isBuild, cleanCss({      
      level:2,
  })))

    .pipe(app.plugins.if(app.isBuild, autoprefixes({
      cascade:false,    
    })))
    
    .pipe(cleanCss())
    .pipe(app.plugins.if(app.isDev, app.plugins.sourcemaps.write()))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browserSync.stream())
}

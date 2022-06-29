import replace from 'gulp-replace'        // поиск замена
import plumber from 'gulp-plumber'        // обработка ошибок
import notify from 'gulp-notify'          // вплывающие подсказки
import browserSync from 'browser-sync'    // локальный сервер
import newer from 'gulp-newer'            // проверка обновлений картинок
import ifPlugin from 'gulp-if'            // условние ветвление
import sourcemaps from 'gulp-sourcemaps'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'

export default {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  babel: babel,
  uglify: uglify,
  newer: newer,
  if: ifPlugin,
  sourcemaps: sourcemaps,
  concat: concat
}

import gulp from 'gulp'                       // Основной модуль
import path from './gulp/config/path.js'      // Импорт путей
import plugins from './gulp/config/plugins.js'// Импорт общих плагинов

// Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
  }

// Импорт тасков
import { server } from './gulp/tasks/server.js'
import { images } from './gulp/tasks/images.js'
import { html } from './gulp/tasks/html.js'
import { scripts } from './gulp/tasks/scripts.js'
import { scss } from './gulp/tasks/scss.js'
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { styles } from './gulp/tasks/styles.js'
import { svgSprite } from './gulp/tasks/svgSprite.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'


// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.js, scripts)
    gulp.watch(path.watch.resources, copy)     
    gulp.watch(path.watch.scss, scss)     
  }


// Обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(images, html, scripts, copy, scss, styles, svgSprite))

// Построение сценариев выполнения задач
// server нужен для того, чтобы мы могли запустить browserSync
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

// Экспортируем эти функции, чтобы мы могли их где-то использовать
export { dev }
export { build }
export { svgSprite }


// Cценарий по умолчанию
gulp.task('default', dev);
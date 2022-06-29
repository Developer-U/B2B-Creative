export const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: 'dist'
  },
    notify: false,
    port: 3000,
    // browser: 'google chrome',   // запуск хрома на маке
    browser: 'chrome',          // запуск хрома на windows
    open: true,
  })
}

import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve()) // Получим имя корневой папки проекта
const buildFolder = './dist'
const srcFolder = './src'

export default {
  build: {
    js: `${buildFolder}/js/`,
    styles: `${buildFolder}/styles/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/images/`,    
    fonts: `${buildFolder}/fonts/`,
    resources: `${buildFolder}/resources/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/index.js`,
    scss: `${srcFolder}/scss/styles.scss`,
    html: `${srcFolder}/*.html`,         // интересуют файлы html в папке с исходниками
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,    
    svg: `${srcFolder}/images/svg/*.svg`, 
    svgicons: `${srcFolder}/svgicons/*.svg`,   
    resources: `${srcFolder}/resources/**/*.*`, 
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/*.html`,         // интересуют файлы html в папке с исходниками
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    svg: `${srcFolder}/images/svg/*.svg`,    
    resources: `${srcFolder}/resources/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,  // интересуют абсолютно все файлы в ./src/files/
  },
  clean: buildFolder,
  buildFolder: buildFolder, // папка с результатом
  srcFolder: srcFolder,     // папка с исходниками
  rootFolder: rootFolder,   // корневая папка проекта
}

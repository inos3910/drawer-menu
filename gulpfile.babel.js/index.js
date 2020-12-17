import gulp from 'gulp';
import { watcher } from './tasks/watch';
import { deleteCssDir, buildCss } from './tasks/css'
import { deleteJsDistDir, buildJs, buildJsAll } from './tasks/js'
import { deleteTsDistDir, ts } from './tasks/ts'
import { browsersync } from './tasks/browsersync'
import { imagemin, webp, sprite, spritemin} from './tasks/img'

//Default
exports.default = gulp.series(watcher, browsersync);
//build CSS&JS
exports.build = gulp.series(deleteCssDir, deleteJsDistDir, buildCss, buildJsAll);
//build TypeScript
exports.buildTs = gulp.series(deleteTsDistDir, ts);
//画像処理系
exports.imagemin  = imagemin;
exports.webp      = webp;
exports.sprite    = sprite;
exports.spritemin = spritemin;
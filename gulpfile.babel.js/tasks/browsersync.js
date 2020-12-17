import {paths}     from '../config';
import browserSync from 'browser-sync';

function browsersync(done) {
  browserSync.init({
    proxy        : paths.serverDir,
    open         : 'external'
  });
  done();
}
exports.browsersync = browsersync;
import browserSync from 'browser-sync';

function reload(done){
  browserSync.reload();
  done();
}
exports.reload = reload;
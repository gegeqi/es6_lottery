import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server', (cb) => {
    if (!args.watch) {
        return cb();
    }

    var server = liveserver.new(['--harmony', 'server/bin/www'])
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
        //告诉服务器文件发生改变
        server.notify.apply(server, [file]);
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)()
    });
})
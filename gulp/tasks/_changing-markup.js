/* eslint-disable arrow-body-style */
import { src, dest } from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import gulpIf from 'gulp-if';
import { config } from '../config';

const changingMarkup = () => {
  return src(config.source.html)
    .pipe(fileinclude({
      prefix: '@',
    }))
    .pipe(gulpIf(config.isProd, htmlmin({
      collapseWhitespace: true,
      removeEmptyAttributes: true,
      useShortDoctype: true,
      removeComments: true,
      collapseBooleanAttributes: true,
    })))
    .pipe(dest(config.build.root))
    .pipe(browserSync.stream());
};

export default changingMarkup;

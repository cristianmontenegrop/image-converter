const { src, dest } = require('gulp');
const sharpResponsive = require('gulp-sharp-responsive');

//Image Task
const img = () =>
  src(
    '/Users/cristian/web-development/professional-work/Lumontih/Lumontih/client/src/img/*.jpg'
  )
    .pipe(
      sharpResponsive({
        formats: [
          { width: 640, format: 'jpeg', rename: { suffix: '-sm' } },
          { width: 768, format: 'jpeg', rename: { suffix: '-md' } },
          { width: 1024, format: 'jpeg', rename: { suffix: '-lg' } },

          { width: 640, format: 'webp', rename: { suffix: '-sm' } },
          { width: 768, format: 'webp', rename: { suffix: '-md' } },
          { width: 1024, format: 'webp', rename: { suffix: '-lg' } },

          { width: 640, format: 'avif', rename: { suffix: '-sm' } },
          { width: 768, format: 'avif', rename: { suffix: '-md' } },
          { width: 1024, format: 'avif', rename: { suffix: '-lg' } },
        ],
      })
    )
    .pipe(
      dest(
        '/Users/cristian/web-development/professional-work/Lumontih/Lumontih/client/src/rImg'
      )
    );

module.exports = { img };

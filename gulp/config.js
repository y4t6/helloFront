var appSource = './app';
var appBuild  = './build';
var fontName  = 'app-font';

module.exports = {
  appSource: appSource,
  appBuild: appBuild,
  fontName: fontName,
  browserSync: {
    notify: false,
    open: false,
    server: appBuild,
    files: [
      appBuild + '/assets/css/index.css'
    ],
  },
  styles: {
    src :                appSource + '/assets/scss',
    folder_src:          appSource + '/assets/scss/**/*.scss',
    main_src:            appSource + '/assets/scss/index.scss',
    dest:                appBuild + '/assets/css/',
    file_normalize_css:  './node_modules/normalize.css/normalize.css',
    file_normalize_scss: appSource + '/assets/scss/base/_b-normalize.scss'
  },
  template: {
    src:        appSource + '/template',
    page_src:   appSource + '/template/pages/**/*.jade',
    dest:       appBuild,
    files_dest: appBuild + '/**/*.html'
  },
  scripts: {
    src: [
     // 'node_modules/jquery/dist/jquery.min.js',
      appSource + '/assets/js/application.js'
    ],
    dest: appBuild + '/assets/js/',
    jshint: [
      appSource + '/assets/js/application.js'
    ]
  },
  images: {
    src: appSource + '/assets/img/**/*.{jpg,png,gif,svg}',
    dest: appBuild + '/assets/img'
  },
  fonts: {
    src: appSource + '/assets/font/**',
    dest: appBuild + '/assets/font'
  },
  font_icon: {
    path_create_icon_font_file: appSource + '/assets/scss/components/_icons.scss',
    src:                        appSource + '/assets/icon',
    files_src:                  appSource + '/assets/icon/*.svg',
    path:                       appSource + '/assets/scss/tools/_template-font-custom.scss',
    target_path:                '../scss/components/_icons.scss',
    font_path:                  '../font-icon/',
    dest:                       appSource + '/assets/font-icon',
    settings: {
      font_name:         fontName,
      append_codepoints: true,
      normalize:        true,
      font_height:       512
    }
  },
  copy: {
    src: [
      appSource + '/.htaccess',
      appSource + '/robots.txt'
    ],
    dest: appBuild
  },
  deploy: {
    folderSrc: appBuild + '/**/*'
  }
};

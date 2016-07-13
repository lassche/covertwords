/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'reflect-metadata':           'node_modules/reflect-metadata',
    'zone':                       'node_modules/zone.js',
    'rxjs':                       'node_modules/rxjs',
    'util':                       'app/util',
    'services':                   'app/services',
    'model':                      'app/model',
    'components':                 'app/components',
    'title-page':                 'app/components/title-page',
    'configuration-page':         'app/components/configuration-page',
    'in-game-page':               'app/components/in-game-page',
    'cards':                      'app/components/cards',

  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'reflect-metadata' :          { defaultExtension: 'js' },
    'zone' :                      { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'util':                       { defaultExtension: 'js' },
    'services':                   { main: 'index.js', defaultExtension: 'js' },
    'model':                      { main: 'index.js', defaultExtension: 'js' },
    'components':                 { main: 'index.js', defaultExtension: 'js' },
    'title-page':                 { main: 'index.js', defaultExtension: 'js' },
    'configuration-page':         { main: 'index.js', defaultExtension: 'js' },
    'in-game-page':               { main: 'index.js', defaultExtension: 'js' },
    'cards':                      { main: 'index.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);

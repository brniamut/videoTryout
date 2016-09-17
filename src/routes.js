angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $sceDelegateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://lb.bgd.video-dock.com/public/**'
  ]);

  $stateProvider
    .state('app', {
      url: '/',
      template: '<grid></grid>'
    })
    .state('video', {
      url: '/video/:name/:url',
      template: '<video-player class="video-player"></video-player>'
    });
}

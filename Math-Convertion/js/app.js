// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

// AREA CONVERTION
  .state('app.area', {
      url: '/area',
      views: {
        'menuContent': {
          templateUrl: 'templates/area.html'
        }
      }
    })

   .state('app.sqkmtosqm', {
      url: '/sqkmtosqm',
      views: {
        'menuContent': {
          templateUrl: 'templates/sqkmtosqm.html',
          controller: 'SqKmtoSqMCtrl'
        }
      }
   })

   .state('app.sqmtosqkm', {
      url: '/sqmtosqkm',
      views: {
        'menuContent': {
          templateUrl: 'templates/sqmtosqkm.html',
          controller: 'SqMtoSqKmCtrl'
        }
      }
   })

   .state('app.sqkmtosqmil', {
      url: '/sqkmtosqmil',
      views: {
        'menuContent': {
          templateUrl: 'templates/sqkmtosqmil.html',
          controller: 'SqKmtoSqMilCtrl'
        }
      }
   })

   .state('app.sqmiltosqkm', {
      url: '/sqmiltosqkm',
      views: {
        'menuContent': {
          templateUrl: 'templates/sqmiltosqkm.html',
          controller: 'SqMiltoSqKmCtrl'
        }
      }
   })
// END AREA CONVERTION

// Length Convertion
   .state('app.length', {
      url: '/length',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/length.html'
        }
      }
    })

   .state('app.kmtom', {
      url: '/kmtom',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/kmtom.html',
          controller: 'KmtoMCtrl'
        }
      }
    })

   .state('app.mtokm', {
      url: '/mtokm',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/mtokm.html',
          controller: 'MtoKmCtrl'
        }
      }
    })

   .state('app.kmtomile', {
      url: '/kmtomile',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/kmtomile.html',
          controller: 'KmtoMileCtrl'
        }
      }
    })

   .state('app.miletokm', {
      url: '/miletokm',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/miletokm.html',
          controller: 'MiletoKmCtrl'
        }
      }
    })

   .state('app.kmtoyard', {
      url: '/kmtoyard',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/kmtoyard.html',
          controller: 'KmtoYardCtrl'
        }
      }
    })

   .state('app.yardtokm', {
      url: '/yardtokm',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/yardtokm.html',
          controller: 'YardtoKmCtrl'
        }
      }
    })

   .state('app.kmtofoot', {
      url: '/kmtofoot',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/kmtofoot.html',
          controller: 'KmtoFootCtrl'
        }
      }
    })

   .state('app.foottokm', {
      url: '/foottokm',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/foottokm.html',
          controller: 'FoottoKmCtrl'
        }
      }
    })

   .state('app.kmtoinch', {
      url: '/kmtoinch',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/kmtoinch.html',
          controller: 'KmtoInchCtrl'
        }
      }
    })

   .state('app.inchtokm', {
      url: '/inchtokm',
      views: {
        'menuContent': {
          templateUrl: 'templates/length/inchtokm.html',
          controller: 'InchtoKmCtrl'
        }
      }
    })
// End Length Convertion

// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/app/home');
});

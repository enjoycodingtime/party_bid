'use strict';
angular
  .module('partyBidApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html',
        controller: 'DefaultCtrl'
      })
        .when('/main',{
            templateUrl:'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/enter_activity',
        {
            templateUrl:"views/enter_activity.html",
               controller:'BookCtrl'
        })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

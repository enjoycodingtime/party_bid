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
        .when('/creat_activity',{
            templateUrl:'views/creat_activity.html',
            controller: 'MainCtrl'
        })
        .when('/enter_activity',
        {
            templateUrl:"views/enter_activity.html",
               controller:'BookCtrl'
        })
      .when('/activity_list', {
        templateUrl: 'views/activity_list.html',
        controller: 'ListCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

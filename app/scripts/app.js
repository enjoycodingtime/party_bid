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
            controller: 'creat_activity_controller'
        })
        .when('/activity_sign_up:name',
        {
            templateUrl:"views/activity_sign_up.html",
               controller:'activity_sign_up_controller'
        })

      .when('/activity_list', {
        templateUrl: 'views/activity_list.html',
        controller: 'activity_list_controller'
      })
      .when('/bid_list:name',{
            templateUrl:'views/bid_list.html',
            controller:'bid_list_controller'
        })
        .when('/bid_sign_up:bid_sign_up_name',{
            templateUrl:'views/bid_sign_up.html',
            controller:'bid_sign_up_controller'
        })

      .otherwise({
        redirectTo: '/'
      });
  });

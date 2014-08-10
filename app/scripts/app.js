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
        .when('/activity_sign_up/:name/:status',
        {
            templateUrl:"views/activity_sign_up.html",
               controller:'activity_sign_up_controller'
        })

      .when('/activity_list', {
        templateUrl: 'views/activity_list.html',
        controller: 'activity_list_controller'
      })
      .when('/bid_list/:name',{
            templateUrl:'views/bid_list.html',
            controller:'bid_list_controller'
        })
        .when('/bid_sign_up/:bid_sign_up_name/:activity_name/:button_able',{
            templateUrl:'views/bid_sign_up.html',
            controller:'bid_sign_up_controller'
        })
        .when('/bid_result/:activity_name/:bid_sign_up_name',{
            templateUrl:'views/bid_result.html',
            controller:'bid_result_controller'
        })
        .when('/bid_statistics/:activity_name/:bid_sign_up_name',{
            templateUrl:'views/bid_statistics.html',
            controller:'bid_statistics_controller'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

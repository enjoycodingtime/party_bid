'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


        $scope.listactivity=function(){
            $location.path('/list')
        }
        $scope.activity=function(name){


            var tempjson= JSON.parse(localStorage['activitykey'] || '[]');
            tempjson.unshift(name);
            localStorage['activitykey']=JSON.stringify(tempjson);
            console.log(name);
            Partyname1.save_name(name);
           // Partyname.save_name(name);
            $location.path('/book')
        }


  });

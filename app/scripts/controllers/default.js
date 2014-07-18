
'use strict';

angular.module('partyBidApp')
    .controller('DefaultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

             var l=localStorage.length;
             if(l==0){
                 $location.path('/main')

             }else{
                 $location.path('/list')
             }




    });

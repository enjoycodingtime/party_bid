
'use strict';

angular.module('partyBidApp')
    .controller('DefaultCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

             var l= JSON.parse(localStorage['activitykey'] || '[]');
             if(l.length==0){
                 $location.path('/main')

             }else{
                 $location.path('/list')
             }




    });

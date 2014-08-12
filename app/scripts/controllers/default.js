
'use strict';

angular.module('partyBidApp')
    .controller('DefaultCtrl', function ($scope, $location) {
             if(Activity.activity_number()){
                 $location.path('/creat_activity')
             }else{
                 $location.path('/activity_list')
             }
    });

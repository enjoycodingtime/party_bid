/**
 * Created by zhangke on 14-7-15.
 */
/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ListCtrl', function ($scope, $location) {
        var arr1=JSON.parse(localStorage['activity_list']||'[]');
        $scope.lists=arr1;
        $scope.started_list=localStorage.getItem("started_activity");
        $scope.createactivity=function(){
            $location.path('/creat_activity')
        }
        $scope.gobook=function(party_name){

            Party.save_name(party_name);
            $location.path('/enter_activity')
        }
    });

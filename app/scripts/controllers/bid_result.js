/**
 * Created by zhangke on 14-8-5.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_result_controller', function ($scope, $location,$routeParams){
        $scope.activity_name=$routeParams.activity_name;
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
        $scope.result_information=(Get_Storage($scope.activity_name+$scope.bid_sign_up_name+"information")).sort(by("price"));
        $scope.back_list=function(){
            $location.path('/bid_list/'+$scope.activity_name)
        };
        $scope.bid_statistics=function(){
            $location.path('/bid_statistics/'+$scope.activity_name+'/'+$routeParams.bid_sign_up_name)
        };


    });
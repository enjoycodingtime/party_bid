/**
 * Created by zhangke on 14-7-28.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_list_controller', function ($scope, $location,$routeParams){
        $scope.activity_name=$routeParams.name;
        $scope.bid_lists=Get_Storage($routeParams.name+"bid_list");
        $scope.activity_sign_up=function(){
                        $location.path('/activity_sign_up'+$routeParams.name);
        };
        $scope.back_list=function(){
            $location.path('/activity_list')
        };
        $scope.creat_bid_sign_up=function(){
            Bid.save_bid($routeParams.name+"bid_list");
            var bid_name=Bid.get_bid($routeParams.name+"bid_list");
            $location.path('/bid_sign_up'+bid_name);

        };
        $scope.bid_sign_up=function(name){
            $location.path('/bid_sign_up'+name);
        };


    });
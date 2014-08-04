/**
 * Created by zhangke on 14-7-28.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_list_controller', function ($scope, $location,$routeParams){

        $scope.activity_name=$routeParams.name;

        $scope.bid_lists=Get_Storage($routeParams.name+"bid_list");
        $scope.started_bid=Get_Item("started_bid");
        $scope.activity_sign_up=function(){
                        $location.path('/activity_sign_up/'+$routeParams.name);
        };
        $scope.back_list=function(){
            $location.path('/activity_list')
        };
        $scope.creat_bid_sign_up=function(){
            var bid_name=Bid.creat_bid($routeParams.name);//  创建竞价
            $location.path('/bid_sign_up/'+bid_name+'/'+($scope.activity_name)+'/'+false);

        };
        $scope.bid_sign_up=function(name){
            $location.path('/bid_sign_up/'+name+'/'+($scope.activity_name)+'/'+true);

        };


    });
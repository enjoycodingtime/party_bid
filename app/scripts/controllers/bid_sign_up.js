/**
 * Created by zhangke on 14-7-31.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_sign_up_controller', function ($scope, $location,$routeParams){
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
//        $scope.bid_name=$routeParams.bid_name;
        $scope.back_bid_list=function(){
            $location.path('/bid_list')
        };
        $scope.end_bid_sign_up=function(){
            if(confirm("是否要结束本次竞价吗？"))
            {

            }
            else{

            };
        }


    });
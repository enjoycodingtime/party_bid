/**
 * Created by zhangke on 14-7-31.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_sign_up_controller', function ($scope, $location,$routeParams){
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
        $scope.activity_name=$routeParams.activity_name;
        //$scope.button_disable=$routeParams.button_able;
        $scope.button_disable=Bid.judge_color($scope.bid_sign_up_name);
        $scope.refresh = function () {
            $scope.informations=Get_Storage($scope.activity_name+$scope.bid_sign_up_name+"information");
            $scope.sign_up_number='('+JSON.parse(localStorage[$scope.activity_name+$scope.bid_sign_up_name+"information"] || '[]').length+"人"+')';
           };

        $scope.refresh();
        $scope.back_bid_list=function(){
            $location.path('/bid_list/'+$scope.activity_name)
        };
        $scope.end_bid_sign_up=function(){
            if(confirm("是否要结束本次竞价？"))
            {
                $scope.button_disable=true;
                Bid.end_bid();
                $location.path('/bid_result/'+$scope.activity_name);
            }
            else{

            };
        }


    });
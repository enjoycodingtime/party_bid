/**
 * Created by zhangke on 14-8-5.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_statistics_controller', function ($scope, $location,$routeParams){
        $scope.activity_name=$routeParams.activity_name;
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
        $scope.back_list=function(){
            $location.path('/bid_list/'+$scope.activity_name)
        };
        $scope.bid_result=function(){
            $location.path('/bid_result/'+$scope.activity_name+'/'+$routeParams.bid_sign_up_name+'/'+'hide');
        };
        $scope.result_information=Bid.sort_result_information($scope.activity_name,$scope.bid_sign_up_name);
        var group = _.groupBy($scope.result_information,'price');
        $scope.bid_statistics=Bid.statistics(group);
        $scope.win=Bid.win_person($scope.result_information);
    });
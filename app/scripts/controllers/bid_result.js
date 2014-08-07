/**
 * Created by zhangke on 14-8-5.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_result_controller', function ($scope, $location,$routeParams){
        $scope.activity_name=$routeParams.activity_name;
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
        $scope.sign_up_number='('+JSON.parse(localStorage[$scope.activity_name+$scope.bid_sign_up_name+"information"] || '[]').length+"人"+')';
        $scope.result_information=Bid.sort_result_information($scope.activity_name,$scope.bid_sign_up_name);
        $scope.win=Bid.win_person($scope.result_information);
        $scope.back_list=function(){
            $location.path('/bid_list/'+$scope.activity_name)
        };
        $scope.bid_statistics=function(){
            $location.path('/bid_statistics/'+$routeParams.activity_name+'/'+$routeParams.bid_sign_up_name)
        };
        $('#myModal').modal("show");
        setTimeout(function(){
                $('#myModal').modal('hide')}
            ,3000);
    });
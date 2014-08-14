/**
 * Created by zhangke on 14-7-28.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_list_controller', function ($scope, $location,$routeParams){
        $scope.activity_name=$routeParams.name;
        $scope.bid_lists=Bid.storage();
        $scope.button_disable=Boolean(Bid.find_by({status:'started'}));
//        $scope.bid_lists=Ge;
//        $scope.started_bid=;
        $scope.activity_sign_up=function(){
                        $location.path('/activity_sign_up/'+$routeParams.name+'/'+'end');
        };
        $scope.back_list=function(){
            $location.path('/activity_list')
        };
        $scope.creat_bid_sign_up=function(){
            var bid = new Bid($scope.activity_name,Bid.get_name($scope.activity_name),'started');
            bid.creat_bid();
            $location.path('/bid_sign_up/'+("竞价"+Activity.find_by({'name':$scope.activity_name}).bid_information.length)+'/'+($scope.activity_name));

        };
        $scope.bid_sign_up=function(name){
            $location.path('/bid_sign_up/'+name+'/'+($scope.activity_name));

        };


    });
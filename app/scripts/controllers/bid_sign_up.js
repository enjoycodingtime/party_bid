/**
 * Created by zhangke on 14-7-31.
 */
'use strict';

angular.module('partyBidApp')
    .controller('bid_sign_up_controller', function ($scope, $location,$routeParams){
        var status=$routeParams.status;
        $scope.bid_sign_up_name=$routeParams.bid_sign_up_name;
        $scope.activity_name=$routeParams.activity_name;
        $scope.button_disable = ($routeParams.button_able == 'end');
        $scope.refresh = function () {
            $scope.informations=Bid.show_bid_information($scope.activity_name,$scope.bid_sign_up_name);
            
            $scope.sign_up_number=''+Bid.bid_number($scope.activity_name,$scope.bid_sign_up_name);
           };

        $scope.refresh();
        $scope.back_bid_list=function(){
            $location.path('/bid_list/'+$scope.activity_name)
        };
        $scope.end_bid_sign_up=function(){
            if(confirm("是否要结束本次竞价？"))
            {
                $scope.button_disable=true;
                var result = Activity.find_by({'name':$scope.activity_name});
                var bid = new Bid($scope.activity_name,$scope.bid_sign_up_name,'end');
                bid.update();
                $location.path('/bid_result/'+$scope.activity_name+'/'+$scope.bid_sign_up_name+'/'+'show');
            }
            else{

            };
        }


    });
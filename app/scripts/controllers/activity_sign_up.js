/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location,$routeParams) {
        $scope.activity_name=$routeParams.name;
        var status=$routeParams.status;
        $scope.start_button=(status=="created"||status=='end');
        $scope.start_button_able=Activity.has_started_activity();
        $scope.end_button_able=(status=='end');
        $scope.back_list=function(){
            $location.path('/activity_list')
        };

        $scope.refresh = function () {
            $scope.information=Activity.get_information($scope.activity_name);
            $scope.sign_up_number=Activity.sign_up_number($scope.activity_name);
        };
        $scope.refresh();

        $scope.start=function(){
            $scope.start_button=false;
            Activity.change_status($scope.activity_name,'started');

        };

        $scope.end=function(){
            if(confirm("是否要结束报名？"))
            {
                Activity.change_status($scope.activity_name,'end');
                $location.path('/bid_list/'+$scope.activity_name)
            }
        };
        $scope.bid_list=function(){
            $location.path('/bid_list/'+$scope.activity_name);
        }
    });

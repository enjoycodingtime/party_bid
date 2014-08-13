/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location,$routeParams) {
        $scope.activity_name = $routeParams.name;
        var status=$routeParams.status;
        $scope.start_button = (status=="created"||status=='end');
        $scope.start_button_able = Boolean(Activity.find_by({status:'started'}));
        $scope.end_button_able = (status=='end');
        $scope.back_list = function(){
            $location.path('/activity_list')
        }
        $scope.refresh = function () {
            $scope.information=Activity.find_by({name:$scope.activity_name}).information;
            $scope.sign_up_number=Activity.sign_up_number($scope.activity_name);
        };
        $scope.refresh();

        $scope.start = function(){
            $scope.start_button = false;
            var result = Activity.find_by({'name': $scope.activity_name});
            var activity = new Activity(result.name,result.status);
            activity.status = 'started';
            activity.update();
        };

        $scope.end = function(){
            if(confirm("是否要结束报名？"))
            {
                var result = Activity.find_by({'name': $scope.activity_name});
                var activity = new Activity(result.name,result.status);
                activity.status = 'end';
                activity.update();
                $location.path('/bid_list/'+$scope.activity_name)
            }
        };
        $scope.bid_list = function(){
            $location.path('/bid_list/'+$scope.activity_name);
        }
    });

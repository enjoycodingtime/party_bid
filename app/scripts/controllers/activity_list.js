
'use strict';

angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {
        $scope.lists=Activity.storage();
        $scope.creat_button = Boolean(Bid.find_started_bid());
        $scope.has_bid_sign_up = Bid.started_bid_activity_name(); 	
        $scope.create_activity=function(){
            $location.path('/creat_activity')
        };
        $scope.activity_sign_up=function(activity_name,activity_status){
        $location.path('/activity_sign_up/'+activity_name+'/'+activity_status)
        }

    });

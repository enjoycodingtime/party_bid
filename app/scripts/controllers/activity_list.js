/**
 * Created by zhangke on 14-7-15.
 */
/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {
        $scope.lists=Activity.storage();
        $scope.create_activity=function(){
            $location.path('/creat_activity')
        };
        $scope.activity_sign_up=function(activity_name,activity_status){
        $location.path('/activity_sign_up/'+activity_name+'/'+activity_status)
        }

    });

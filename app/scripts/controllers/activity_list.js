/**
 * Created by zhangke on 14-7-15.
 */
/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_list_controller', function ($scope, $location) {
        $scope.lists=Get_Storage('activity_list');
        $scope.started_list=Get_Item("started_activity");
        $scope.create_activity=function(){
            $location.path('/creat_activity')
        }
        $scope.activity_sign_up=function(party_name){

            //Party.save_name(party_name);
            $location.path('/activity_sign_up'+party_name)
        }

    });

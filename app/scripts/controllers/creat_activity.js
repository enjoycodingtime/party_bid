'use strict';
angular.module('partyBidApp')
  .controller('creat_activity_controller', function ($scope, $location) {
        $scope.activity_number=Activity.activity_number();
        $scope.activity_list=function(){
            $location.path('/activity_list')
        };
        $scope.creat_activity=function(name){

            if(Check_Repeat("activity_list",name))
            {
                $scope.warn="活动名称有重复，请重新输入！"
            }
            else
            {
                Activity.save_activity(name);
                $location.path('/activity_sign_up/'+name);
                Set_Item("activity_start","true");

            }
        }
  });

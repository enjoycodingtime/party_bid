'use strict';
angular.module('partyBidApp')
  .controller('creat_activity_controller', function ($scope, $location) {
        $scope.activity_number=function()
        {
            var activity_number=Get_Storage('activity_list');
                if(activity_number.length!=0)
            {
                return true;
            }
                return false;
        };
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
                Party.save_activity(name);
                $location.path('/activity_sign_up'+name);

            }
        }
  });

'use strict';
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope, $location) {
        $scope.activity_number=function()
        {
            var activity_number= JSON.parse(localStorage['activity_list'] || '[]');
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
            var activity_list= JSON.parse(localStorage['activity_list'] || '[]');
            function check_activity_name(name)
            {
                for(var i=0;i<activity_list.length;i++)
                {
                    if(activity_list[i]==name)
                    {
                        return true;
                    }
                }
                return false;
            };

            if(check_activity_name(name))
            {
                $scope.warn="活动名称有重复，请重新输入！"
            }
            else
            {
                Party.save_activity(name);
                Party.save_name(name);
                $location.path('/enter_activity')
            }
        }
  });

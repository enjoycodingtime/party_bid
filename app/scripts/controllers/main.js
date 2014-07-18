'use strict';

/**
 * @ngdoc function
 * @name partyBidApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the partyBidApp
 */
angular.module('partyBidApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        if(localStorage.length!=0)
        {
            var back_nn=true;
        }
        else{
            back_nn=false;
        }
        $scope.back_button=back_nn;
        $scope.back_n=localStorage.length;
        $scope.listactivity=function(){
            $location.path('/list')
        }
        $scope.activity=function(name){
            var list_json= JSON.parse(localStorage['activitykey'] || '[]');
            for(var i=0;i<list_json.length;i++)
            {
                if(list_json[i]==name)
                {
                   var chongfu=1;
                }
            }
            if(chongfu==1)
            {
                $scope.warn="活动名称有重复，请重新输入！"
            }
            else{
                list_json.unshift(name);
                localStorage['activitykey']=JSON.stringify(list_json);
                Partyname1.save_name(name);
                $location.path('/book')
            }
        }
  });

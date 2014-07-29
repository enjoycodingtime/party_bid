
'use strict';

angular.module('partyBidApp')
    .controller('DefaultCtrl', function ($scope, $location) {
              localStorage.setItem("started_activity","");
             var activity_list= Get_Storage("activity_list");
             if(activity_list.length==0){
                 $location.path('/creat_activity')
             }else{
                 $location.path('/activity_list')
             }




    });

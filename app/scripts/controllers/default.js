
'use strict';

angular.module('partyBidApp')
    .controller('DefaultCtrl', function ($scope, $location) {
              localStorage.setItem("started_activity","");
             var l= JSON.parse(localStorage['activitykey'] || '[]');
             if(l.length==0){
                 $location.path('/creat_activity')
             }else{
                 $location.path('/activity_list')
             }




    });

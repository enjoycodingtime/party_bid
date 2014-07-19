/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('BookCtrl', function ($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.book_partyname=localStorage.getItem("book_partyname");
       // $scope.partyname="活动1";
        $scope.list1=function(){
            $location.path('/list')
        }
        $scope.delete_activity=function()
        {
            $location.path('/list');
            var delete_item= JSON.parse(localStorage['activitykey']);
            for(var i=0;i<delete_item.length;i++)
            {
                if(delete_item[i]==$scope.book_partyname)
                {
                    delete_item.splice(i,1);
                }
            }
            localStorage['activitykey']=JSON.stringify(delete_item);
        }

    });

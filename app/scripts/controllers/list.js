/**
 * Created by zhangke on 14-7-15.
 */
/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('ListCtrl', function ($scope, $location) {
        console.log('m')
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        var arr1=JSON.parse(localStorage['activitykey']);
        $scope.lists=arr1;
        $scope.partyname=localStorage.getItem("partyname");
        $scope.createactivity=function(){
            $location.path('/')
        }
        $scope.gobook=function(book_partyname){
            Partyname1.save_name(book_partyname);
            $location.path('/book')
        }

    });

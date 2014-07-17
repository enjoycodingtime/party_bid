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

    });

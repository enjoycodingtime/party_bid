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
        //$scope.lists = List.get_all_lists();
        $scope.lists=JSON.parse(localStorage['Local_list']);


        $scope.partyname=localStorage.getItem("partyname");
        $scope.createactivity=function(){
            $location.path('/')
        }
        $scope.gobook=function(book_partyname){
            Partyname1.save_name(book_partyname);
            $location.path('/book')
        }

    });
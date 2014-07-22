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
//        $scope.activity_yellow = function (activity) {
//            if () {
//                return "start";
//            }
//        }

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

        $scope.refresh = function () {
            var book_partyname=localStorage.getItem("book_partyname");
            if(book_partyname==localStorage.getItem("message_activity"))
            {
                $scope.startbutton=true;
                var m_name=JSON.parse(localStorage['message_name']||'[]');
                var m_phone=JSON.parse(localStorage['message_phone']||'[]');
                $scope.names=m_name;
                $scope.phones=m_phone;
                var list_number= JSON.parse(localStorage['message_phone'] || '[]');
                $scope.number=list_number.length+"人";
            }
        };

        $scope.refresh();

    });

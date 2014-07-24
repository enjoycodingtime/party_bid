/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('BookCtrl', function ($scope, $location) {

        $scope.book_partyname=localStorage.getItem("book_partyname");
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
                var storage_activity=localStorage.getItem("book_partyname");
                var storage_name=storage_activity+"name";
                var storage_phone=storage_activity+"phone";
                $scope.startbutton=true;
                var m_name=JSON.parse(localStorage[storage_name]||'[]');
                var m_phone=JSON.parse(localStorage[storage_phone]||'[]');
                $scope.names=m_name;
                $scope.phones=m_phone;
                var list_number= JSON.parse(localStorage[storage_phone] || '[]');
                $scope.number=list_number.length+"人";
            }
        };
        $scope.refresh();
        $scope.start=function(){
            var NGfalse="false";
            $scope.NGwen=NGfalse;
            var started_activity=localStorage.getItem("book_partyname");
            localStorage.setItem("started_activity",started_activity);
            $scope.startbutton=false;
            localStorage.setItem("activity_start",$scope.startbutton);
        };
        $scope.false11=function(){
            var NGfalse1="start";
            $scope.NGwen=NGfalse1;
            if(confirm("是否要结束报名？"))
            {
                $scope.startbutton=true;
                localStorage.setItem("activity_start","activity_over");
                localStorage.setItem("started_activity","");
            }
            else{
                return false;
            }
        };

        if(localStorage.getItem("started_activity")==localStorage.getItem("book_partyname"))
        {
            $scope.startbutton=false;
            var NGwhen="false";
            $scope.NGwen=NGwhen;
        }
        else{

            var NGwhen="start";
            $scope.NGwen=NGwhen;
            $scope.startbutton=true;
        }
        if(localStorage.getItem("started_activity")!=[]&&localStorage.getItem("started_activity")!=localStorage.getItem("book_partyname"))
        {
            $scope.button_able=true;
        }

        else{
            $scope.button_able=false;
        }
        localStorage.setItem("activity_start",$scope.startbutton);


    });

/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('BookCtrl', function ($scope, $location) {

        $scope.party_name=localStorage.getItem("party_name");
        $scope.list1=function(){
            $location.path('/activity_list')
        }
        $scope.refresh = function () {
            var party_name=localStorage.getItem("party_name");
            var storage_activity=localStorage.getItem("party_name");
            var storage_name=storage_activity+"name";
            var storage_phone=storage_activity+"phone";
            $scope.startbutton=true;
            var m_name=JSON.parse(localStorage[storage_name]||'[]');
            var m_phone=JSON.parse(localStorage[storage_phone]||'[]');
            $scope.names=m_name;
            $scope.phones=m_phone;
            var list_number= JSON.parse(localStorage[storage_phone] || '[]');
            $scope.number=list_number.length+"人";

        };
        $scope.refresh();
        $scope.start=function(){
            var NGfalse="false";
            $scope.NGwen=NGfalse;
            var started_activity=localStorage.getItem("party_name");
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

                $scope.NGwen="start";
                localStorage.setItem("activity_start","activity_over");
                localStorage.setItem("started_activity","");
            }
            else{
                $scope.NGwen=false;
            }
        };

        if(localStorage.getItem("started_activity")==localStorage.getItem("party_name"))
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
        if(localStorage.getItem("started_activity")!=[]&&localStorage.getItem("started_activity")!=localStorage.getItem("party_name"))
        {
            $scope.button_able=true;
        }

        else{
            $scope.button_able=false;
        }
        localStorage.setItem("activity_start",$scope.startbutton);


    });

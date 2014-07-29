/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location,$routeParams) {
        $scope.activity_name=$routeParams.name;
        //$scope.activity_name=$scope;
        $scope.party_name=Get_Item("party_name");
        $scope.list1=function(){
            $location.path('/activity_list')
        }

        $scope.refresh = function () {
            var storage_name=$scope.activity_name+"name";
            var storage_phone=$scope.activity_name+"phone";
            $scope.startbutton=true;
            var name=Get_Storage(storage_name);
            var phone=Get_Storage(storage_phone);
            $scope.names=name;
            $scope.phones=phone;//
            $scope.number=phone.length+"人";
        };
        $scope.refresh();

        $scope.start=function(){
            $scope.start_button="false";
            Set_Item("started_activity",$scope.activity_name);
            $scope.startbutton=false;
            Set_Item("activity_start",$scope.startbutton);
        };

        $scope.end=function(){
            $scope.start_button="start";
            if(confirm("是否要结束报名？"))
            {
                $scope.startbutton=true;

                $scope.start_button="start";
                Set_Item("activity_start","activity_over");
                Set_Item("started_activity","");
            }
            else{
                $scope.start_button=false;
            }
        };

        if(Get_Item("started_activity")==$scope.activity_name)
        {
            $scope.start_button="false";
        }
        else{
            $scope.start_button="start";
            }
        if(Get_Item("started_activity")!=[]&&Get_Item("started_activity")!=$scope.activity_name)
        {
            $scope.button_able=true;
        }

        else{
            $scope.button_able=false;
        }
        Set_Item("activity_start",$scope.startbutton);


    });

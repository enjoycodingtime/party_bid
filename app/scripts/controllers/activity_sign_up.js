/**
 * Created by zhangke on 14-7-15.
 */
'use strict';

angular.module('partyBidApp')
    .controller('activity_sign_up_controller', function ($scope, $location,$routeParams) {
        $scope.activity_name=$routeParams.name;
        $scope.party_name=Get_Item("party_name");
        Set_Item("activity_start",Get_activity_start("activity_start"));//
        $scope.back_list=function(){
            $location.path('/activity_list')
        };

        $scope.refresh = function () {
            var storage_name=$scope.activity_name+"name";
            var storage_phone=$scope.activity_name+"phone";
            $scope.startbutton=true;
            $scope.names=Get_Storage(storage_name);
            $scope.phones=Get_Storage(storage_phone);
            $scope.sign_up_number=Get_Storage(storage_name).length+"人";
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
                $location.path('/bid_list/'+$scope.activity_name)
            }
            else{
                $scope.start_button=false;
            };
        };
        $scope.bid_list=function(){
            $location.path('/bid_list/'+$scope.activity_name);
           // $location.path('/bid_list');
        }
    });

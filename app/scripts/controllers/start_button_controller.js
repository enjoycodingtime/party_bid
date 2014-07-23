/**
 * Created by zhangke on 14-7-21.
 */
        function start_button_controller($scope){
            if(localStorage.getItem("started_activity")==localStorage.getItem("book_partyname"))
            {
                $scope.startbutton=false;
            }
            else{
                $scope.startbutton=true;
            }
//            $scope.startbutton=localStorage.getItem(["activity_start"]||[true]);
//            localStorage.setItem("activity_start",$scope.startbutton);
            $scope.start=function()
            {
                var started_activity=localStorage.getItem("book_partyname");
                localStorage.setItem("started_activity",started_activity);
                $scope.startbutton=false;
                localStorage.setItem("activity_start",$scope.startbutton);
            }
            $scope.show=function()
            {
                if(confirm("是否要结束报名？"))
                {
                    $scope.startbutton=true;
                    localStorage.setItem("activity_start","activity_over");
                }
                else{
                    return false;
                }

            }

        }
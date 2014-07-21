/**
 * Created by zhangke on 14-7-21.
 */
        function start_button_controller($scope){
            $scope.startbutton=true;
            $scope.hide=function()
            {
                $scope.startbutton=false;
            }
            $scope.show=function()
            {
                $scope.startbutton=true;
            }
        }
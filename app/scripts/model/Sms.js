/**
 * Created by zhangke on 14-7-31.
 */
function Sms(){

}
Sms.add_information=function(storage_name,sign_name,storage_phone,sign_phone){
    Push_Array(storage_name, sign_name);
    Push_Array(storage_phone, sign_phone);
    localStorage['message_activity'] = Get_Item("started_activity");
    Sign_up_Scope = angular.element("#activity_sign-up").scope();
    Sign_up_Scope.$apply(function () {
        Sign_up_Scope.refresh();
    });
};
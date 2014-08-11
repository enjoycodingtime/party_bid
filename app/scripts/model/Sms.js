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
    if(Sign_up_Scope!=undefined){
        Sign_up_Scope.$apply(function () {
            Sign_up_Scope.refresh();
        });
    }


};
Sms.check_bid_number=function(phone){
    //Get_Item("started_activity");
    var phone_list= Get_Storage(Get_Item("message_activity")+'phone');
    for(var i=0;i<phone_list.length;i++)
    {
        if(phone_list[i]==phone)
        {
            return true;
        }
    }
    return false;
};
Sms.check_bid_number_repeat=function(phone){
    //Get_Item("started_activity");
    var phone_list= Get_Storage(Get_Item('message_activity')+Get_Item('started_bid')+"information");
    for(var i=0;i<phone_list.length;i++)
    {
        if(phone_list[i].phone==phone)
        {
            return true;
        }
    }
    return false;
};
Sms.sign_up_response=function(phone,message){
    sign_name = message.substr(2, 8);
    if(!Sms.have_started()&&!Sms.have_end()) {
        return  '活动尚未开始！请稍侯';
    }
    else if (Sms.have_started()){
        Activity.save_information(phone,sign_name);
        return '报名成功！'
    }
    else if (!Sms.have_started()){
        return "Sorry!活动报名已经结束！"
    }
//    else{
//
//        if (activity_start == "false") {
//            var storage_activity = Get_Item("started_activity");
//            var storage_name = storage_activity + "name";
//            var storage_phone = storage_activity + "phone";
//            var sign_name;
//            sign_name = message_json.messages[0].message.substr(2, 8);
//            var sign_phone;
//            sign_phone = message_json.messages[0].phone;
//            var message_name = Get_Storage(storage_name);
//            var message_phone = Get_Storage(storage_phone);
//
//            if (Check_Repeat(storage_phone, sign_phone)) {
//                //console.log("对不起，你的电话已经报名，报名重复！");
//                native_accessor.send_sms(message_json.messages[0].phone, '对不起，你的电话已经报名，报名重复！');
//            }
//            else if (!Check_Repeat(storage_phone, sign_phone)) {
//                if (Check_Repeat(storage_name, sign_name)) {
//                    for (var p = 0; p < message_phone.length; p++) {
//                        var name_repeat = parseInt(Get_Item("name_repeat") || 0);
//
//                    }
//                    name_repeat = name_repeat + 1;
//                    Set_Item("name_repeat", name_repeat);
//                    sign_name = sign_name + "(" + name_repeat + ")";
//                    Sms.add_information(storage_name,sign_name,storage_phone,sign_phone);
//                    native_accessor.send_sms(message_json.messages[0].phone, '恭喜！报名成功');
//                    //console.log('恭喜！报名成功');
//                }
//                else {
//                    Sms.add_information(storage_name,sign_name,storage_phone,sign_phone);
//                    native_accessor.send_sms(message_json.messages[0].phone, '恭喜！报名成功');
//                    //console.log('恭喜！报名成功');
//                };
//            }
//
//        }
//
//    }
//
//    else if (activity_start == "activity_over") {
//        native_accessor.send_sms(message_json.messages[0].phone, 'Sorry!活动报名已经结束！');
//        //console.log('Sorry!活动报名已经结束！')
//    }



};
Sms.bid_response=function(phone,message){
    JSON.stringify(message);
  if(Get_Item('started_bid')==''){
      return '对不起，活动已经结束！';
  }
  else if(Get_Item('started_bid')==null){
      return '对不起，活动尚未开始！';
}
  else{
      if(!Sms.check_bid_number(phone)){
          return '对不起，您没有报名此次活动！';
      }
      else{
          if(Sms.check_bid_number_repeat(phone)){
              return '您已成功出价，请勿重复出价';
          }

          else{
              var price= message.substr(2, 8);
              if(isNaN(parseInt(price))||parseInt(price)<=0){
                  return '价格格式不正确！'
              }
              else{
                  //Push_Array1(Get_Item('started_bid')+'price',price);
                  var name=Sms.find_name(phone);
                  var information={
                      name:name,
                      phone:phone,
                      price:parseInt(price)
                  };
                  Push_Array1(Get_Item('message_activity')+Get_Item('started_bid')+"information",information);
                  Sign_up_Bid = angular.element("#bid_sign_up").scope();
                  if(Sign_up_Bid!=undefined){
                      Sign_up_Bid.$apply(function () {
                          Sign_up_Bid.refresh();
                      });
                  };
                  return '恭喜！您已出价成功';
              }
          }
      }
}

};
Sms.find_name=function(phone){
    var phone_list=Get_Storage(Get_Item('message_activity')+'phone');
    var name_list=Get_Storage(Get_Item('message_activity')+'name');
    for(var i=0;i<phone_list.length;i++)
    {
        if(phone_list[i]==phone)
        {
            return name_list[i];
        }
    }
};
Sms.have_started=function(){
    var activity_list = JSON.parse(localStorage['Activity'] || '[]');
    var has_started_activity=_.find(activity_list,function(list){
        return list.status=='started';
    });
    return (has_started_activity!=undefined)
};
Sms.have_end=function(){
    var activity_list = JSON.parse(localStorage['Activity'] || '[]');
    var has_started_activity=_.find(activity_list,function(list){
        return list.status=='end';
    });
    return (has_started_activity!=undefined)
};

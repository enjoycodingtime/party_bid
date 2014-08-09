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

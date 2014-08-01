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
Sms.check_bid_number=function(phone){
    //Get_Item("started_activity");
    var phone_list= Get_Storage(Get_Item("started_activity")+'phone');
    console.log(phone_list);
    for(var i=0;i<phone_list.length;i++)
    {
        if(phone_list[i]==phone)
        {
            return true;
        }
    }
    return false;
};
Sms.bid_response=function(phone,message){
    JSON.stringify(message);
    //console.log(Get_Item('started_bid'));
  if(Get_Item('started_bid')==''){
      return '对不起，活动已经结束！';
  }
  else if(Get_Item('started_bid')==null){
      return '对不起，活动尚未开始！';
//      return '恭喜！您已出价成功'
  }
  else{
      if(!Sms.check_bid_number(phone)){
          return '对不起，您没有报名此次活动！';
      }
      else{
          var price= message.substr(2, 8);
//          var price_list=Get_Storage(Get_Item('started_bid')+'price');
          Push_Array(Get_Item('started_bid')+'price',price);
          var name=Sms.find_name(phone);
          console.log('name:'+name+'phone'+phone+'price'+price);
          Sign_up_Bid = angular.element("#bid_sign_up").scope();
          Sign_up_Bid.$apply(function () {
              Sign_up_Bid.refresh();
          });
          return '恭喜！您已出价成功';


      }


//      return '对不起，活动尚未开始！';


  }

};
Sms.find_name=function(phone){
    var phone_list=Get_Storage(Get_Item('started_activity')+'phone');
    var name_list=Get_Storage(Get_Item('started_activity')+'name');
    for(var i=0;i<phone_list.length;i++)
    {
        if(phone_list[i]==phone)
        {
            return name_list[i];
        }
    }
};

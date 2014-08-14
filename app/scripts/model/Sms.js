
function Sms(){

}

Sms.sign_up_response=function(phone,message){
    sign_name = message.substr(2, 8);
    if(!Sms.have_started()&&!Sms.have_end()) {
        return  '活动尚未开始！请稍侯';
    }
    else if (Sms.have_started()){
        if(Activity.check_phone_repeat(phone))
        {
            return '对不起，你的电话已经报名，报名重复！'
        }
        else{
            Activity.save_information(phone,sign_name);
            Activity_sign_up = angular.element("#activity_sign_up").scope();
            if(Activity_sign_up!=undefined){
                Activity_sign_up.$apply(function () {
                    Activity_sign_up.refresh();
                });
            }
            return '报名成功！'
        }
    }
    else if (!Sms.have_started()){
        return "Sorry!活动报名已经结束！"
    }
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

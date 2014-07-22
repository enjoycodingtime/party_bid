//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (message_json) {
        var activity_start=localStorage.getItem("activity_start");
        //console.log(activity_start);

        if( activity_start=="true")
        {
            console.log('活动尚未开始！请稍侯');
        }
        else if(activity_start=="false"){
            JSON.stringify(message_json);
            var message = message_json.messages[0].message.replace(/\s/g, "");
            console.log(message.search(/bm/i) == 0);
            //var activity_start=localStorage.getItem("activity_start");
            if(message.search(/bm/i) == 0)
            {
                if(activity_start=="false")
                {

                    var sign_name;
                    sign_name=message_json.messages[0].message.substr(2, 2);
                    var sign_phone;
                    sign_phone=message_json.messages[0].phone;
                    var message_name= JSON.parse(localStorage['message_name'] || '[]');
                    var message_phone= JSON.parse(localStorage['message_phone'] || '[]');
                    message_name.unshift(sign_name);
                    message_phone.unshift(sign_phone);
                    localStorage['message_name']=JSON.stringify(message_name);
                    localStorage['message_phone']=JSON.stringify(message_phone);
                    localStorage['message_activity']=localStorage.getItem("book_partyname");
                    var bookScope = angular.element("#book").scope();
                    bookScope.$apply(function () {
                        bookScope.refresh();
                    });
                    console.log(bookScope);
                    console.log('恭喜！报名成功');
                }
            }
            else{
                console.log("报名格式不正确，请重新发送报名短信。bm+姓名");
            }



        }
        else if(activity_start=="activity_over")
        {
            console.log('Sorry!活动报名已经结束！')
        }

}
}



function notify_message_received(message_json) {
   // console.log(JSON.stringify(message_json));
//    JSON.stringify(message_json);
//    var message = message_json.messages[0].message.replace(/\s/g, "");
//    console.log(message.search(/bm/i) == 0);
//    var activity_start=localStorage.getItem("activity_start");
//    if(message.search(/bm/i) == 0)
//    {
//        if(activity_start=="false")
//        {
//
//            var sign_name;
//            sign_name=message_json.messages[0].name;
//            var sign_phone;
//            sign_phone=message_json.messages[0].phone;
//            var message_name= JSON.parse(localStorage['message_name'] || '[]');
//            var message_phone= JSON.parse(localStorage['message_phone'] || '[]');
//            message_name.unshift(sign_name);
//            message_phone.unshift(sign_phone);
//            localStorage['message_name']=JSON.stringify(message_name);
//            localStorage['message_phone']=JSON.stringify(message_phone);
//            localStorage['message_activity']=localStorage.getItem("book_partyname");
//        }
//    }
//    else{
//        console.log("报名格式不正确，请重新发送报名短信。bm+姓名");
//    }


//    JSON.stringify(message_json);
//    var sign_name;
//    sign_name=message_json.messages[0].name;
//    var sign_phone;
//    sign_phone=message_json.messages[0].phone;
//    var message_name= JSON.parse(localStorage['message_name'] || '[]');
//    var message_phone= JSON.parse(localStorage['message_phone'] || '[]');
//    message_name.unshift(sign_name);
//    message_phone.unshift(sign_phone);
//    localStorage['message_name']=JSON.stringify(message_name);
//    localStorage['message_phone']=JSON.stringify(message_phone);

//    var message_list= JSON.parse(localStorage['message'] || '[]');
//    message_list.unshift(JSON.stringify(message_json));
//    localStorage['message']=JSON.stringify(message_list);

    //localStorage['message']=JSON.stringify(message_json);
//    console.log(message_json.message[0].phone);
//    console.log(message_json.message[0].name);
    //alert(JSON.stringify(message_json.messages));
   native_accessor.receive_message(message_json);
//    console.log(message_json.messages[0].phone);
//    console.log(message_json.messages[0].name);
    //phone_number=message_json.messages[0].phone;
}

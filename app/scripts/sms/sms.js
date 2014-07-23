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
                    var storage_activity=localStorage.getItem("book_partyname");
                    var storage_name=storage_activity+"name";
                    var storage_phone=storage_activity+"phone";

                    var sign_name;
                    sign_name=message_json.messages[0].message.substr(2, 8);
                    var sign_phone;
                    sign_phone=message_json.messages[0].phone;
                    var message_name= JSON.parse(localStorage[storage_name] || '[]');
                    var message_phone= JSON.parse(localStorage[storage_phone] || '[]');
                    for(var i=0;i<message_name.length;i++)
                    {
                        if(message_name[i]==sign_name)
                        {
                            var chongfu=1;
                        }
                    }
                    if(chongfu==1)
                    {
                        for (var p=0;p<message_phone.length;p++) {

                            var chongfu_name = parseInt(localStorage.getItem("chongfu_number")||0);
                            if (message_phone[p] == sign_phone) {

                                var chongfu_phone = 1;
                            }
                        }
                            if(chongfu_phone==1)
                            {
                                console.log("报名重复！");
                            }
                            else{
                                chongfu_name=chongfu_name+1;
                                localStorage.setItem("chongfu_number",chongfu_name);
                                sign_name=sign_name+"("+chongfu_name+")";
                                message_name.push(sign_name);
                                message_phone.push(sign_phone);
                                localStorage[storage_name]=JSON.stringify(message_name);
                                localStorage[storage_phone]=JSON.stringify(message_phone);
                                localStorage['message_activity']=localStorage.getItem("book_partyname");
                                var bookScope = angular.element("#book").scope();
                                bookScope.$apply(function () {
                                    bookScope.refresh();
                                });
                                console.log(bookScope);
                                console.log('恭喜！报名成功');
                            }



                    }
                    else if(chongfu!=1){
                        message_name.push(sign_name);
                        message_phone.push(sign_phone);
                        localStorage[storage_name]=JSON.stringify(message_name);
                        localStorage[storage_phone]=JSON.stringify(message_phone);
                        localStorage['message_activity']=localStorage.getItem("book_partyname");
                        var bookScope = angular.element("#book").scope();
                        bookScope.$apply(function () {
                            bookScope.refresh();
                        });
                        console.log(bookScope);
                        console.log('恭喜！报名成功');
                    }


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

   native_accessor.receive_message(message_json);

}

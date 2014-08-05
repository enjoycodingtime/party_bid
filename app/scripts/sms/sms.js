//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        //console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (message_json) {
        var message = message_json.messages[0].message.replace(/\s/g, "");
        if(message.search(/bm/i) == 0) {
            var activity_start = Get_Item("activity_start");
            if (activity_start == "true") {
                native_accessor.send_sms(message_json.messages[0].phone, '活动尚未开始，请稍候。');
                //console.log('活动尚未开始！请稍侯');
            }
            else if (activity_start == "false") {
                JSON.stringify(message_json);

                    if (activity_start == "false") {
                        var storage_activity = Get_Item("started_activity");
                        var storage_name = storage_activity + "name";
                        var storage_phone = storage_activity + "phone";
                        var sign_name;
                        sign_name = message_json.messages[0].message.substr(2, 8);
                        var sign_phone;
                        sign_phone = message_json.messages[0].phone;
                        var message_name = Get_Storage(storage_name);
                        var message_phone = Get_Storage(storage_phone);

                        if (Check_Repeat(storage_phone, sign_phone)) {
                            //console.log("对不起，你的电话已经报名，报名重复！");
                            native_accessor.send_sms(message_json.messages[0].phone, '对不起，你的电话已经报名，报名重复！');
                        }
                        else if (!Check_Repeat(storage_phone, sign_phone)) {
                            if (Check_Repeat(storage_name, sign_name)) {
                                for (var p = 0; p < message_phone.length; p++) {
                                    var name_repeat = parseInt(Get_Item("name_repeat") || 0);

                                }
                                name_repeat = name_repeat + 1;
                                Set_Item("name_repeat", name_repeat);
                                sign_name = sign_name + "(" + name_repeat + ")";
                                Sms.add_information(storage_name,sign_name,storage_phone,sign_phone);
                                native_accessor.send_sms(message_json.messages[0].phone, '恭喜！报名成功');
                                //console.log('恭喜！报名成功');
                            }
                            else {
                                Sms.add_information(storage_name,sign_name,storage_phone,sign_phone);
                                native_accessor.send_sms(message_json.messages[0].phone, '恭喜！报名成功');
                                //console.log('恭喜！报名成功');
                            };
                        }

                    }

            }

            else if (activity_start == "activity_over") {
                native_accessor.send_sms(message_json.messages[0].phone, 'Sorry!活动报名已经结束！');
                //console.log('Sorry!活动报名已经结束！')
            }
        }

        else if(message.search(/jj/i) == 0){
//            console.log("竞价成功！")
            var message=Sms.bid_response(message_json.messages[0].phone,message_json.messages[0].message);
            native_accessor.send_sms(message_json.messages[0].phone,message);

        }

}
}



function notify_message_received(message_json) {

   native_accessor.receive_message(message_json);

}

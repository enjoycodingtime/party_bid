function Activity(name, status) {
    this.name = name;
    this.status = status;
}
//创建活动
Activity.prototype.creat_activity = function() {
    var save_object = {} ;
    save_object.name = this.name;
    save_object.status = this.status;
    var activity_list = Activity.storage();
    activity_list.unshift(this);
    localStorage['Activity'] = JSON.stringify(activity_list);
};

/**
 * var activity = Activity.find_by({"name":name});
 * activity.status = status;
 * activity.update();
 *
 * var activity = Activity.find_by({status: 'start');
 * activity.add_information(information)
 * activity.update();
 *
 * @param name
 * @param status
 */
//改变活动状态
Activity.change_status = function(name,status){
    var activity_list = Activity.storage();
    var start_activity=_.find(activity_list,function(list){
        return list.name==name;
    });
    var index=activity_list.indexOf(start_activity);
    activity_list[index].status=status;
    localStorage['Activity'] = JSON.stringify(activity_list);
};
//检查有没重复的活动
Activity.check_repeat=function(name){
    var activity_list = Activity.storage();

    var repeat_activity=_.find(activity_list,function(list){
        return list.name==name;
    });
    return (repeat_activity!=undefined)
};
//是否有活动开始
Activity.has_started_activity=function(){
    var activity_list =Activity.storage();

    var has_started_activity=_.find(activity_list,function(list){
        return list.status=='started';
    });
    return (has_started_activity!=undefined)
};
//保存报名信息
Activity.save_information=function(phone,name){
    var activity_list = Activity.storage();

    var start_activity=_.find(activity_list,function(list){
        return list.status=='started';
    });
    var index=activity_list.indexOf(start_activity);
    var sign_information=activity_list[index].information||[];
    var person={
        'name':name,
        'phone':phone
    };
    sign_information.unshift(person);
    activity_list[index].information=sign_information;
    localStorage['Activity'] = JSON.stringify(activity_list);
};
//读取报名信息
Activity.get_information=function(activity_name){
    var activity_list =Activity.storage();
    var start_activity=_.find(activity_list,function(list){
        return list.name==activity_name;
    });
    return start_activity.information;
};
//读取Activity信息
Activity.storage=function(){
    return JSON.parse(localStorage['Activity'] || '[]');
};
//判断是否已经创建活动
Activity.activity_number=function(){
    var activity_number=Activity.storage();
    if(activity_number.length!=0)
    {
        return true;
    }
    return false;
};
//读取活动数量
Activity.sign_up_number=function(activity_name){
    var activity_list=Activity.storage();
    var start_activity=_.find(activity_list,function(list){
        return list.name==activity_name;
    });
    try{
        return start_activity.information.length;
    }
    catch(err){
        return '0';
    }
};
//检查电话号码是否重复
Activity.check_phone_repeat=function(phone){
    var activity_list = Activity.storage();

    var started_activity=_.find(activity_list,function(list){
        return list.status=='started';
    });
    var hava_repeat=_.find(started_activity.information,function(list){
        return list.phone==phone;
    });
    console.log(hava_repeat!=undefined);
    return (hava_repeat!=undefined)
};
//Activity.get_activity_name=function(){
//    var activity_list=Activity.storage();
//    var start_activity=_.find(activity_list,function(list){
//        return list.name==activity_name;
//    });
//};
//function Get_Storage(key){
//        return JSON.parse(localStorage[key] || '[]');
//}
//function Get_Item(storage_name){
//    return localStorage.getItem(storage_name);
//}
//function Get_activity_start(storage_name){
//    return localStorage.getItem(storage_name)||true;
//}
//function Set_Item(key,value){
//    localStorage.setItem(key,value);
//    return 0;
//}
//
//function Push_Array(key,value){
//    var array_list= JSON.parse(localStorage[key] || '[]');
//    array_list.unshift(value);
//    localStorage[key]=JSON.stringify(array_list);
//};
//function Push_Array1(key,value){
//    var array_list= JSON.parse(localStorage[key] || '[]');
//    array_list.push(value);
//    localStorage[key]=JSON.stringify(array_list);
//};



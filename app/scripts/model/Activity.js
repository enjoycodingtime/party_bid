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

Activity.find_by = function(obj) {
    var activity_list = Activity.storage();
    var activity = _.findWhere(activity_list, obj);
    return new Activity(activity.name,activity.status);
};

Activity.prototype.change_status = function(status) {
    this.status = status;
    this.update();
};
Activity.prototype.update = function() {
    var self = this;
    var activity_list = Activity.storage();
    activity_list = _(activity_list).map(function(activity) {
        if (activity.name === self.name) {
            activity = self;
        }
        return activity;
    });
    Activity.set_storage(activity_list);
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

//存取Activity信息
Activity.set_storage = function(activity_information){
    localStorage['Activity'] = JSON.stringify(activity_information);
};

//判断是否已经创建活动
Activity.activity_number=function(){
    var activity_number=Activity.storage();
    return (activity_number.length == 0);
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
    return (hava_repeat!=undefined)
};




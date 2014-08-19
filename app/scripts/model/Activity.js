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
    Activity.set_storage(activity_list);
};
//查找
Activity.find_by = function(obj) {
    var activity_list = Activity.storage();
    return _.findWhere(activity_list, obj);
};

//更新
Activity.prototype.update = function() {
    var self = this;
    var activity_list = Activity.storage();
    activity_list = _(activity_list).map(function(activity) {
        if (activity.name === self.name) {
            activity.status = self.status;
        }
        return activity;
    });
    Activity.set_storage(activity_list);
};

//存储报名信息
Activity.save_information=function(phone,name){
    var activity_list = Activity.storage();
    var start_activity=_.findWhere(activity_list,{'status':'started'});
    var index = activity_list.indexOf(start_activity);
    var sign_information = activity_list[index].information||[];
    var person = {
        'name':name,
        'phone':phone
    };
    sign_information.unshift(person);
    activity_list[index].information = sign_information;
    Activity.set_storage(activity_list);
};

//读取Activity信息
Activity.storage = function(){
    return JSON.parse(localStorage['Activity'] || '[]');
};

//存储Activity信息
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
    try{
        return Activity.find_by({name:activity_name}).information.length;
    }
    catch(err){
        return '0';
    }
};
//检查电话号码是否重复
Activity.check_phone_repeat=function(phone){
    //Activity.find_by({status:'started'});
    var have_repeat=_.find(Activity.find_by({status:'started'}).information,function(list){
        return list.phone==phone;
    });
    return (have_repeat!=undefined)
};




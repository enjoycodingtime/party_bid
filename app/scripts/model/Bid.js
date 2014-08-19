function Bid(activity,name,status){
    this.activity = activity;
    this.name = name;
    this.status = status;
}
//创建竞价
Bid.prototype.creat_bid = function() {
    var self = this;
    var activity_list = Activity.storage();
    activity_list = _(activity_list).map(function(activity) {
        if (activity.name === self.activity) {
            var bid = new Array();
            bid = activity.bid_information||[];
            var bid_inf = {
                'bid_name':self.name,
                'bid_status':self.status
            }
            bid.unshift(bid_inf);
            activity.bid_information = bid;
        }
        return activity;
    });
    Activity.set_storage(activity_list);
};
Bid.find_started_bid = function() {
    var list = Activity.storage();
    var result = _.find(list,function(num){
        if(_.findWhere(num.bid_information,{'bid_status':'started'})){
            return num;
        }        
    });
    return result;
}

Bid.find_by = function(activity_name,obj) {
    var information = Activity.find_by({'name':activity_name}).bid_information;
    return _.findWhere(information,obj);
}

//get the bid name
Bid.get_name = function(activity_name){
    try{
        return "竞价"+(Activity.find_by({'name':activity_name}).bid_information.length+1);
    }
    catch(err){
        return "竞价1";
    }
};

//更新
Bid.prototype.update = function() {
    var self = this;
    var activity_list = Activity.storage();
    activity_list = _(activity_list).map(function(activity) {
        if (activity.name === self.activity) {
            var bid = new Array();
            bid = activity.bid_information||[];
            for (var position = 0;position < bid.length; position++){
                if (bid[position].bid_status == 'started'){
                    bid[position].bid_status = 'end';
                }               
            }
            activity.bid_information = bid;
        }
        return activity;
    });
    Activity.set_storage(activity_list);};

//Check that registration
Bid.check_sign_up = function(activity,phone){
    var have_repeat=_.find(Activity.find_by({name:activity}).information,function(list){
        return list.phone==phone;
    });
    return (have_repeat!=undefined)
};

Bid.find_name = function(phone){
    var activity = Bid.find_started_bid().name;
    var have_repeat=_.find(Activity.find_by({name:activity}).information,function(list){
        return list.phone==phone;
    });
    return have_repeat.name;
};

Bid.save_information = function(phone,price){
    var activity_list = Activity.storage();
    var result =Bid.find_started_bid();
    var bid_sign_information = result.bid_information[0].sign_up||[];
    var name = Bid.find_name(phone);
    bid_sign_information .unshift({
        'name':name,
        'phone':phone,
        'price':price
    });
    result.bid_information[0].sign_up = bid_sign_information;
    activity_list = _(activity_list).map(function(activity) {
        if (activity.name === result.name) {
            activity.bid_information = result.bid_information;
        }
        return activity;
    });
    Activity.set_storage(activity_list);
};

Bid.show_bid_information = function(activity_name,bid_sign_name){
    var bid_list = Activity.find_by({name:activity_name}).bid_information;
    return _.findWhere(bid_list,{'bid_name':bid_sign_name}).sign_up;
};

Bid.bid_number = function (activity_name,bid_sign_name){
    try{
        return Bid.show_bid_information(activity_name,bid_sign_name).length;
    }catch(err){
        return '0';
    }
};  

Bid.check_bid_sign_up_repeat = function(phone){
    var activity_name = Bid.find_started_bid().name;
    var bid_sign_name = Bid.find_started_bid().bid_information[0].bid_name;
    var sign_information = Bid.show_bid_information(activity_name,bid_sign_name);
    return _.findWhere(sign_information,{'phone':phone})
};

Bid.sort_result_information = function(activity_name,bid_sign_name){
    var bid_list = Bid.show_bid_information(activity_name,bid_sign_name);
    return _.sortBy(bid_list,"price");
};

Bid.win_person = function(sorted_information){
    var group = _.groupBy(sorted_information,'price');
    Bid.statistics(group);

    var win_price = _.find(group,function(num){
        return num.length == 1;
    });
    if(win_price == undefined){
        win_price = {information:'竞价失败！'};
        return win_price;
    }else{
        win_price[0].information = '竞价成功！';
        return win_price[0];
    }

};

Bid.statistics = function(argument){
    return result = _.map(argument,function(value,key){
        return {'price':key,'count':value.length}
    });
};



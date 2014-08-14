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

//get the bid name
Bid.get_name = function(activity_name){
    try{
        console.log(Activity.find_by({'name':activity_name}).bid_information.length+1);
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
            console.log(activity.bid_information);
        }
        return activity;
    });
    Activity.set_storage(activity_list);};

//存储报名信息
Bid.save_information=function(phone,name){
    var bid_list = Bid.storage();
    var start_bid=_.find(bid_list,function(list){
        return list.status=='started';
    });
    var index = bid_list.indexOf(start_bid);
    var sign_information = bid_list[index].information||[];
    var person = {
        'name':name,
        'phone':phone
    };
    sign_information.unshift(person);
    bid_list[index].information = sign_information;
    Bid.set_storage(bid_list);
};

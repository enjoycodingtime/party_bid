function Bid(activity,name,status){
    this.activity = activity;
    this.name = name;
    this.status = status;
}
//创建竞价
Bid.prototype.creat_bid = function() {
    var bid_object = {} ;
    bid_object.activity=this.activity;
    bid_object.name = this.name;
    bid_object.status = this.status;
    var bid_list = Bid.storage();
    bid_list.unshift(this);
    Bid.set_storage(bid_list);
};
Bid.storage = function(){
    return JSON.parse(localStorage['Bid'] || '[]');
};
Bid.set_storage = function(bid_information){
    localStorage['Bid'] = JSON.stringify(bid_information);
};
Bid.get_name = function(){
    try{
        return "竞价"+(Bid.storage().length+1);
    }
    catch(err){
        return "竞价1";
    }
};
Bid.find_by = function(bid) {
    var bid_list = Bid.storage();
    console.log(_.findWhere(bid_list,bid));
    return _.findWhere(bid_list,bid);
};

//更新
Bid.prototype.update = function() {
    var self = this;
    var bid_list = Bid.storage();
    bid_list = _(bid_list).map(function(bid) {
        if (bid.name === self.name && bid.activity === self.activity) {
            bid.status = self.status;
        }
        return bid;
    });
    Bid.set_storage(bid_list);
};

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
// Bid.save_bid=function(key){
//     var bid_list= JSON.parse(localStorage[key] || '[]');
//     bid_list.unshift("竞价"+(bid_list.length+1));
//     localStorage[key]=JSON.stringify(bid_list);
// };
// Bid.get_bid=function(key){
//     var bid_list= JSON.parse(localStorage[key]);
//     return bid_list[0];
// };
// Bid.creat_bid=function(activity_name){
//     Bid.save_bid(activity_name+"bid_list");
//     var bid_name=Bid.get_bid(activity_name+"bid_list");
//     Set_Item("started_bid",bid_name);
//     Set_Item("started_bid_activity",activity_name);
//     return bid_name;
// };
// Bid.end_bid=function(){
//     Set_Item("started_bid","");
//     Set_Item("started_bid_activity","");
// };
// Bid.judge_color=function(bid_name){
//     if(Get_Item('started_bid')==bid_name){
//         return false;
//     }
//     else{
//         return true;
//     }
// };
// Bid.judge_start_button=function(){
//     if(Get_Item('activity_start')!='activity_over'){
//         return true;
//     }
//   else if(Get_Item('started_bid')==''||Get_Item('started_bid')==null) {
//       return false;
//   }

//     else{
//       return true;
//   }
// };
// Bid.sort_result_information=function(activity_name,bid_name){
//     var result_information=Get_Storage(activity_name+bid_name+'information');
//     return _.sortBy(result_information,'price');
// };
// Bid.win_person=function(array){
//    var group= _.groupBy(array,'price');
//     Bid.statistics(group);
//    var win_price= _.find(group,function(num){
//        return num.length==1;
//    });
//     if(win_price==undefined){
//         win_price={information:'竞价失败！'};
//         return win_price;
//     }
//     else{
//         win_price[0].information='竞价成功！';
//         return win_price[0];
//     }
// };
// Bid.statistics=function(argument){
//     var result = _.map(argument, function(value,key ){
//         return {"price": key, "count": value.length}
//     });
//     localStorage['bid_result'] = JSON.stringify(result);
// };

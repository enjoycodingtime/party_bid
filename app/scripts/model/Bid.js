/**
 * Created by zhangke on 14-7-31.
 */
function Bid(){

}
Bid.save_bid=function(key){
    var bid_list= JSON.parse(localStorage[key] || '[]');
    bid_list.unshift("竞价"+(bid_list.length+1));
    localStorage[key]=JSON.stringify(bid_list);
};
Bid.get_bid=function(key){
    var bid_list= JSON.parse(localStorage[key]);
    return bid_list[0];
};
Bid.creat_bid=function(activity_name){
    Bid.save_bid(activity_name+"bid_list");
    var bid_name=Bid.get_bid(activity_name+"bid_list");
    Set_Item("started_bid",bid_name);
    Set_Item("started_bid_activity",activity_name);
    return bid_name;
};
Bid.end_bid=function(){
    Set_Item("started_bid","");
    Set_Item("started_bid_activity","");
};
Bid.judge_color=function(bid_name){
    if(Get_Item('started_bid')==bid_name){
        return false;
    }
    else{
        return true;
    }
};
Bid.judge_start_button=function(){
  if(Get_Item('started_bid')==''||Get_Item('started_bid')==null) {
      return false;
  }
    else{
      return true;
  }
};
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

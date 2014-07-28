/**
 * Created by zhangke on 14-7-17.
 */
/**
 * Created by zhangke on 14-7-15.
 */
function Party() {
}
Party.save_name = function (name) {
    localStorage.setItem("party_name", name);
};
Party.save_activity=function(name){
    var activity_list= JSON.parse(localStorage['activity_list'] || '[]');
    activity_list.unshift(name);
    localStorage['activity_list']=JSON.stringify(activity_list);
};



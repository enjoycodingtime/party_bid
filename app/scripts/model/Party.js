/**
 * Created by zhangke on 14-7-17.
 */
/**
 * Created by zhangke on 14-7-15.
 */
function Party() {
}

Party.save_activity=function(name){
    var activity_list= JSON.parse(localStorage['activity_list'] || '[]');
    activity_list.unshift(name);
    localStorage['activity_list']=JSON.stringify(activity_list);
};
function Get_Storage(storage_name){
    return JSON.parse(localStorage[storage_name] || '[]');
}
function Set_Storage(storage_name){

}
function Get_Item(storage_name){
    return localStorage.getItem(storage_name);
}
function Get_activity_start(storage_name){
    return localStorage.getItem(storage_name)||true;
}
function Set_Item(key,value){
    localStorage.setItem(key,value);
    return 0;
}
function Check_Repeat(key,value)   //检查重复
{
    var array_list= Get_Storage(key);
    for(var i=0;i<array_list.length;i++)
    {
        if(array_list[i]==value)
        {
            return true;
        }
    }
    return false;
};
function Push_Array(key,value){
    var array_list= JSON.parse(localStorage[key] || '[]');
    array_list.unshift(value);
    localStorage[key]=JSON.stringify(array_list);
}


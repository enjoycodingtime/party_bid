
/**
 * Created by zhangke on 14-7-15.
 */
function Partyname() {
}



Partyname.save_name = function (name) {
   //var list=JSON.parse(list_data);
   // var names = localStorage.getItem("partyname") || '[]';
    var item={'name':name};
    var i=list_data.unshift(item);
    var Jlist_data=JSON.stringify(list_data);
    localStorage.setItem("Local_list", Jlist_data);
    console.log(i);
 //var Jlist_data=JSON.stringify(list_data);



    //localStorage.setItem("book_partyname", name);

}

console.log(localStorage.getItem("partyname"));


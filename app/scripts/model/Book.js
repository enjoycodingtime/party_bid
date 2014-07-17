/**
 * Created by zhangke on 14-7-17.
 */
/**
 * Created by zhangke on 14-7-15.
 */
function Partyname1() {
}



Partyname1.save_name = function (name) {
    //var list=JSON.parse(list_data);
    // var names = localStorage.getItem("partyname") || '[]';
//    var item={'name':name};
//    var i=list_data.unshift(item);
//    console.log(i);
    // list_data=JSON.stringify(list_data);

    localStorage.setItem("book_partyname", name);

}

console.log(localStorage.getItem("book_partyname"));


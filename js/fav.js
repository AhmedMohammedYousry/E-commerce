var items_container = document.getElementById("items-container");
var numOfItems=document.getElementById("num_of_items");
var count=0;
for (i=0; i<localStorage.length; i++) {  
    key = localStorage.key(i); 
    if(key.substring(0,3) === "fav"){
        var product=localStorage.getItem(key);
        var arr=product.split("|");
            items_container.innerHTML +="<div class='cartItem'>"+
            "<div class='item-left'><img src='"+arr[1]+"'/></div>"+
            "<div class='item-middle'><span><b>"+arr[0]+"</b></span>"+
                "<div class='item-middle-inner'>"+
                "<p style='color: black; font-size: 16px;'>"+arr[4]+"</p></div></div>"+
            "<div class='item-right'><span><b>EGP "+arr[2]+"</b></span></div>"+
            "<button type='button' onclick=\"removeFromFav('"+key+"')\">delete</button></div>";
            count ++;
    }
}
numOfItems.innerHTML=count;
/***********************************************************/
function removeFromFav(id){
    var response=confirm("You Are Sure Delete Product From Favoite");
    if(response){
        localStorage.removeItem(id);
        window.location.reload();
    }
}
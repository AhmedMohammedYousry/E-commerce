var items_container = document.getElementById("items-container");
var numOfItems=document.getElementById("num_of_items");
var count=0;
var total_expenses = 0;
for (i=0; i<localStorage.length; i++) {  
    key = localStorage.key(i);
    if(key.substring(0,4) === "cart"){
        var product=localStorage.getItem(key);
        var arr=product.split("|");
            items_container.innerHTML +="<div class='cartItem'>"+
            "<div class='item-left'><img src='"+arr[1]+"'/></div>"+
            "<div class='item-middle'><span><b>"+arr[0]+"</b></span>"+
                "<div class='item-middle-inner'>"+
                "<p style='color: black; font-size: 16px;'>"+arr[4]+"</p></div></div>"+
            "<div class='item-right'><span><b>EGP "+arr[3]+"</b></span></div>"+
            "<button onclick=\"removeFromCart('"+key+"')\">delete</button></div>";
            count ++;
            total_expenses += parseInt(arr[3])
    }
}
numOfItems.innerHTML=count;
document.getElementById("total_expenses").innerHTML=total_expenses;

/********************************************************************* */
function removeFromCart(id){
    var response=confirm("You Are Sure Delete Product From Cart");
    if(response){
        localStorage.removeItem(id);
        window.location.reload();
    }
}
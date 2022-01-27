/***************************************Add User In Navbar If Login******************************************/
if(localStorage.getItem("login") && localStorage.getItem("login") !== ""){
    document.getElementById("nav-login").style.display="none";
    document.getElementById("nav-register").style.display="none";
    document.getElementById("nav-user").innerHTML=localStorage.getItem("login");
    document.getElementById("nav-user").style.display="block";
    document.getElementById("logout").style.display="block";
}
/***************************************logout******************************************/
var logout=document.getElementById("logout");
logout.addEventListener("click",function(){
    localStorage.removeItem("login");
    window.location="login.html";
});
/***************************************Show Notification******************************************/
var notice=document.getElementsByClassName("notification");
var c=0;
window.onload=function(){
    for (i=0; i<localStorage.length; i++) {  
        k = localStorage.key(i);
        if(k.substring(0,4) === "cart"){
            notice[0].innerHTML=++c;
            notice[0].style.display="block";
        }else{
            notice[0].style.display="none";
        }
    }
}
/**************Definition Products******************/
var products=[
    {
        id:1,
        title:"Dell Core i5",
        oldPrice:2300,
        newPrice:2000,
        imgUrl:"images/dell-corei5.png",
        category:"computers"
    },
    {
        id:2,
        title:"Dell inspiron 24",
        oldPrice:4100,
        newPrice:3000,
        imgUrl:"images/dell-inspiron24.jpg",
        category:"computers"
    },
    {
        id:3,
        title:"Dell Optiplex PC",
        oldPrice:4100,
        newPrice:3000,
        imgUrl:"images/dell-optiplexcomputerpc.jpg",
        category:"computers"
    },
    {
        id:4,
        title:"Hundi Venueimt",
        oldPrice:310000,
        newPrice:300000,
        imgUrl:"images/hundi-venueimt.jpeg",
        category:"cars"
    },
    {
        id:5,
        title:"Toyota Model 2021",
        oldPrice:500000,
        newPrice:490000,
        imgUrl:"images/toyota-model2021.webp",
        category:"cars"
    },
    {
        id:6,
        title:"Mitsubishi",
        oldPrice:350000,
        newPrice:340000,
        imgUrl:"images/mitsubishi.jpg",
        category:"cars"
    },
    {
        id:7,
        title:"JavaScript",
        oldPrice:60,
        newPrice:50,
        imgUrl:"images/javascript.jpg",
        category:"books"
    },
    {
        id:8,
        title:"C++",
        oldPrice:90,
        newPrice:65,
        imgUrl:"images/c++.jpg",
        category:"books"
    },
    {
        id:9,
        title:"Html",
        oldPrice:30,
        newPrice:25,
        imgUrl:"images/html.jpg",
        category:"books"
    },
    {
        id:10,
        title:"USP",
        oldPrice:70,
        newPrice:45,
        imgUrl:"images/usb.png",
        category:"electronics"
    },
    {
        id:11,
        title:"M190",
        oldPrice:60,
        newPrice:35,
        imgUrl:"images/m190.png",
        category:"electronics"
    },
    {
        id:12,
        title:"Electric Motor",
        oldPrice:30,
        newPrice:25,
        imgUrl:"images/electric-motor.jpg",
        category:"electronics"
    }
];
/********************Show Products In Products Page*********************************/
/*********************this code get category from URL**********************/
var params = new URLSearchParams(window.location.search);
var cat = params.get("cat");
/************************************************************************/
var product=document.getElementById("products");
    function showProducts(){
        if(cat === null){
            document.getElementById("product-page").innerHTML="<div class='alert alert-danger text-center fw-bold my-5'>NO Products Here !!</div>";
        }else{
            for(var i = 0 ;i < products.length ;i++){
                if(products[i].category === cat){
                  product.innerHTML+="<div class='col-sm-6 col-md-4 my-3'>"+
                  "<div class='card' style='width: 18rem ; height: 440px;overflow: hidden;'>"+
                    "<img class='card-img-top' style='height:200px' src='"+products[i].imgUrl+"' alt='Card image cap'>"+
                    "<div class='card-body'><h5 class='card-title'>"+products[i].title+"</h5>"+
                    "<p>Price :<span class='px-3'>"+products[i].newPrice+"$</span><del class='text-danger'>"+products[i].oldPrice+"$</del></p>"+
                      "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"+
                        "<div class='action d-flex justify-content-between'>"+
                           "<button onclick='addToCart("+products[i].id+")' type='button' class='btn btn-success'>Add to Cart</button>"+
                           "<i id='fav"+products[i].id+"' onclick='addToFav("+products[i].id+")' class='far fa-heart fa-lg mt-2'></i></div></div></div></div>";
                }
            }
        }
    }

showProducts();

/*******************************Add To Cart*************************************************/
function addToCart(id){
        var prod=products.find(obj=>{
            return obj.id === id
        });
        if(localStorage.getItem("login") && localStorage.getItem("login") !== ""){
            if(localStorage.getItem("cart"+prod.id)){
                alert("This Product Added Before !!");
            }else{
                localStorage.setItem("cart"+prod.id,prod.title+"|"+prod.imgUrl+"|"+prod.newPrice+"|"+prod.oldPrice+"|"+prod.category);
                alert("Added Successfuly");
                window.location.reload();
            } 
        }else{
            alert("Login First To Add Cart");
        }
}
/*******************************Add To Favorit*************************************************/
function addToFav(id){
        var prod=products.find(obj=>{
            return obj.id === id
        });
        if(localStorage.getItem("login") && localStorage.getItem("login") !== ""){
            if(localStorage.getItem("fav"+prod.id)){
                alert("This Product Has Been Removed from Favourites !!");
                document.getElementById("fav"+prod.id).style.color="black";
                localStorage.removeItem("fav"+prod.id)

            }else{
                localStorage.setItem("fav"+prod.id,prod.title+"|"+prod.imgUrl+"|"+prod.newPrice+"|"+prod.oldPrice+"|"+prod.category)+"red";
                alert("Added Successfuly");
                document.getElementById("fav"+prod.id).style.color="red";
            } 
        }else{
            alert("Login First To Add Favorite");
        }
}

// fix refresh bug for favourites
window.addEventListener("load",function(){
setTimeout(function(){
    var countStart = 0;
    var countEnd = 0;
    for(var i = 0 ;i <= 12 ;i++){
        if(document.getElementById("fav"+i)){
            countStart = i
            countEnd = i
            for(var j = i+1 ;j <= 12 ;j++){
                if(document.getElementById("fav"+j)){
                    countEnd++
                }
            }
            break;
        }
    }
    var icons = document.getElementsByTagName("i")
    console.log(icons);
    for(var i = countStart ;i <= countEnd ;i++){
        if(localStorage.getItem("fav"+i)) {
            
            document.getElementById("fav"+ i).style.color="red";

        
        }
    }
},100)

});

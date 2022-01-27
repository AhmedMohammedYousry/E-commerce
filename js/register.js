function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var password = document.Form.password.value;
    var mobile = document.Form.mobile.value;
    var city = document.Form.city.value;
    var gender = document.Form.gender.value;
    

    var nameErr = emailErr = passErr = mobileErr = cityErr = genderErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");   
        }
    }
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address containe @ , . ");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    if(password == "")
     {
        printError("passErr", "Please enter 8 char at least");
         var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
     } 
      else
     {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if(regex.test(password) === false)
         {
            printError("passErr", "Please enter nums , upper&lower case and [@,!,#,%,&]");
            var elem = document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } 
        else
        {
            printError("passErr", "");
            passErr = false;
            var elem = document.getElementById("password");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^01[0125][0-9]{8}$/gm;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number start 01");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    

    if(city == "Select") {
        printError("cityErr", "Please select your city");
        var elem = document.getElementById("city");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("cityErr", "");
        cityErr = false;
        var elem = document.getElementById("city");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    if((nameErr || emailErr ||  passErr || mobileErr || cityErr || genderErr) == true) {
       return false;
    }else{
        localStorage.setItem("register",email+"|"+password+"|"+name+"|"+mobile+"|"+gender)
    } 
};

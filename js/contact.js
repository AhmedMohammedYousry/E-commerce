// acess form - buttons - Message
var form = document.getElementById('myform');
var button = document.getElementById('sendBtn');
var alertMessage = document.getElementById("error-messages");
var textareavalidation = document.getElementById("textareavalidation");


var validForm = function (e) {
  e.preventDefault();
  alertMessage.innerHTML = "";
  textareavalidation.innerHTML = "";
  var msg = "";
  var errMsg = "";

  // access name - email -textarea
  var name = document.getElementById("myname").value;
  var email = document.getElementById("myemail").value;
  var textarea = document.getElementById("mytextarea").value.length;
  //////////////////////////////////////////////////////////////////
// validation on name
  var nameregex= /^[a-zA-Z\s]+$/;
  if (name == "") {
    msg += "<li> Please enter your name.</li>";
  } else {
    if (nameregex.test(name) === false) {
      msg += "<li> Please enter a valid name contain only Alphabet.</li>";
    }
  }
  //////////////////////////////////////////////////////////////////
  // validation on email
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email == "") {
    msg += " <li>Please enter your email.</li> ";
  } else {
    if (emailregex.test(email) === false) {
      msg += "<li>Please enter a valid email address similar to ([a-zA-Z][1-9]@gmail.com) </li>";
    }
  }
  //////////////////////////////////////////////////////////////////
  // validation on textarea
  if (textarea < 50) {
    errMsg += "<li> Please enter your massge here.</li>";
  }

  //show alert messages 
  alertMessage.innerHTML = msg;
  textareavalidation.innerHTML =errMsg;
  if(msg === "" && errMsg ===""){
    document.getElementById("response").style.display="block";
  }
}
//add event listener on form when submitting it.
form.addEventListener("submit", validForm);

let submission = document.getElementById("submit");
let textbox = document.getElementsByClassName("textBox");
let userName = document.getElementById("name");
submission.addEventListener("click", blank);

function blank(){
     textbox.value = innerHTML="";
     document.getElementById("message").innerHTML="Thank you for sending me a message " + userName.value + "!";
}
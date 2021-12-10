
function email(){
    var email=document.getElementById("Email").value;
    localStorage.setItem("mail",email);
}

var btn=document.getElementById("btn");
btn.addEventListener("click",email);
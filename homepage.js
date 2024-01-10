function loginRedirect(){
   document.querySelector(".login").classList.add('login_new');

}
function home(){
   document.querySelector(".login").classList.remove('login_new');

}

function login()
{
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;
    if(uname=='User1' && pass=='123')
    {
        location.assign("pk.html");
    }
    else{
        window.alert("You are not an Avenger");
    }
}
function Cancel()
{
    document.getElementById('username').value="";
    document.getElementById('password').value="";
}
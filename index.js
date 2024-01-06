function login()
        {   
            var uname=document.getElementById('username').value;
            var pass=document.getElementById('password').value;
            if(uname=='User1' && pass==pass1)
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

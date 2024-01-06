function login()
        {   
            var uname=document.getElementById('username').value;
            var pass=document.getElementById('password').value;
            if(uname=='User1' && pass=="123")
            {
                location.assign("index.html");
            }
            else{
                window.alert("You are Succesfully Logged In");
            }
        }
        function Cancel()
        {
            document.getElementById('username').value="";
            document.getElementById('password').value="";
        }

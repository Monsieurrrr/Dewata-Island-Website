function validate(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let checkbox = document.getElementById("remember").value;

    if(email == ""){
        window.alert("Email must be filled!");
        
        return false;
    } else if(!email.endsWith("@gmail.com")){
        window.alert("Email must be contain @gmail.com!");
        return false;
    } else if(pass == ""){
        window.alert("Password shouldn't be empty!");
        return false;
    } else{
        window.location = "home.html"
    }
}
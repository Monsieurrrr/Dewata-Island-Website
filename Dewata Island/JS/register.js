function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let gender = document.getElementsByName("gender");

    if(name == ""){
        window.alert("Name must be filled!");
        return false;
    } else if(name.length < 5){
        window.alert("Name must more than 5 letters!");
        return false;
    } else if(email == ""){
        window.alert("Email must be filled!");
        return false;
    }else if(!email.endsWith("@gmail.com")){
        window.alert("Email must be contain @gmail.com!");
        return false;
    } else if(pass == ""){
        window.alert("Password shouldn't be empty!");
        return false;
    } else if(pass.length < 8){
        window.alert("Password min 8 characters!");
        return false;
    } else if(!(gender[0].checked || gender[1].checked)){
        window.alert("must choose one gender!");
        return false;
    }else{
        window.location = "home.html"
    }
}
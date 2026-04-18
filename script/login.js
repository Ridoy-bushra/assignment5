const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener('click', () =>{
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const userV = user.value;
    console.log(userV);
    const passV =pass.value;
    console.log(passV);

    if(userV ==="admin" && passV === "admin123"){
        alert("logged in successfully");
        window.location.assign("./home.html");
    }
    else {
        alert("invalid credential");
    }
});

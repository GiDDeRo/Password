const password = document.getElementById("password");
const icon = document.getElementById("icon");

icon.onclick = function () {
    if(password.type == "password") {
        password.type = "text";
        icon.src = "eye-open.png";
    } else {
        password.type = "password"
        icon.src = "eye-close.png";
    }
}
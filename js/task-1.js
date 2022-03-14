const baseLogin = "Admin";
const basePassword = "12345";
alert("Вітаю, щоб зареєструватись введіть спочатку логін, потім пароль");
const userLogin = prompt("Ваш логін");
let userPassword;

switch (userLogin) {
    case baseLogin :
        userPassword = prompt("Вірно, Ваш пароль?");
        break;
    default: 
        alert("Доступ заборонено !!");
        break;
    
}

if (userLogin === baseLogin) {
    switch (userPassword) {
        case basePassword: 
        alert("Ласкаво просимо!!");
        break;
        default: 
        alert("Невірний пароль");
    }
}
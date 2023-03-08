
function func() {
    let userAge = prompt("Введите свой возраст");
    if (userAge >= 18) {
        alert("Вам есть 18")
    }
    else {
        alert("Вам нет 18")
        func()
    }
};
func()
const calculator = document.getElementById("calculator");
calculator.addEventListener("click", calculate);
function calculate() {
    let data = prompt("Привет, я калькулятор! Напешите выражение, которое хотите вычислить")
    if (data === null) {
        alert("Ввод отменен");
    } else {
        data = data.replace(/,/g, ".");
        try {
            let result = eval(data);
            if (data === "") {
                alert("Вы ничего не ввели")
            } else if (result === Infinity || result === -Infinity) {
                alert("На ноль делить нельзя")
            } else if (isNaN(result)) {
                showMessageError()
            } else {
                alert(result)
            }
        } catch (error) {
            showMessageError()
        }
    }
}
function showMessageError(){
    alert("Введите корректное выражение");
}

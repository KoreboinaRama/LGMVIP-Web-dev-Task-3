let displayEl = document.querySelector("#displayText");
let buttons = document.querySelectorAll(".btn-input");


let str = " ";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.value === '=') {
            let res = eval(str);
            displayEl.value = res;
            str = " ";
        } else if (e.target.value === 'AC') {
            let str = "";
            displayEl.value = str;
        } else if (e.target.value === 'C') {
            str = str.substring(0, str.length - 1);
            displayEl.value = str;
        } else {
            str += e.target.value;
            displayEl.value = str;
        }
    });
});
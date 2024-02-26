const number_1 = document.querySelector('#number_1');
const number_2 = document.querySelector('#number_2');
const result = document.querySelector('#resultado');

const buttonSum = document.querySelector('#somar');
const buttonSub = document.querySelector('#subtrair');
const buttonMult = document.querySelector('#multiplicar');
const buttonDiv = document.querySelector('#dividir');

buttonSum.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sum = num_1 + num_2;

    result.value = sum;

});

buttonSub.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let sub = num_1 - num_2;

    result.value = sub;

});

buttonMult.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let mult = num_1 * num_2;

    result.value = mult;

});

buttonDiv.addEventListener("click", (event) => {

    let num_1 = Number(number_1.value);
    let num_2 = Number(number_2.value);
    let div = num_1 / num_2;

    result.value = div;

});
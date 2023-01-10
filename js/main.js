let metaUser = parseInt(prompt('Qual a sua meta de tasks diária?'));
let pergunta = confirm('Já fez alguma task hoje? Se sim confirme e digite a quantidade!');
let newValue = 0;

document.querySelector('#home_box_result_meta_value').innerHTML=metaUser;

if(pergunta === true){
    newValue = parseInt(prompt('Digite a quantidade já feita'));
};

let taskvalue = 0.03;
let totaltask = parseInt(document.querySelector('#home_box_result_totaltask_value').innerHTML=newValue);
let faltatask = parseInt(document.querySelector('#home_box_result_falta_value').innerHTML=(metaUser-newValue));
let money = parseFloat(document.querySelector('#money').innerHTML=(newValue*taskvalue));

let btnAdc1 = document.querySelector('#schedule_1');
let btnRem1 = document.querySelector('#schedule_remove_1');
let valor1 = parseInt(document.querySelector('.home_box_schedule_title_1_value').innerHTML=newValue);

if(btnAdc1.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_1_value').innerHTML=++valor1;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

// REMOVE
if(btnRem1.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_1_value').innerHTML=--valor1;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));
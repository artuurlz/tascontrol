var metaUser = parseInt(prompt('Qual a sua meta de tasks diária?'));

document.querySelector('#home_box_result_meta_value').innerHTML=metaUser;

var totaltask = parseInt(document.querySelector('#home_box_result_totaltask_value').innerHTML);
var faltatask = parseInt(document.querySelector('#home_box_result_falta_value').innerHTML=metaUser);
var money = parseFloat(document.querySelector('#money').innerHTML);
var taskvalue = 0.03;

var btnAdc1 = document.querySelector('#schedule_1');
var btnRem1 = document.querySelector('#schedule_remove_1');
var valor1 = parseInt(document.querySelector('.home_box_schedule_title_1_value').innerHTML);

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
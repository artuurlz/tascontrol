var metaUser = parseInt(prompt('Qual a sua meta de tasks diária?'));

document.querySelector('#home_box_result_meta_value').innerHTML=metaUser;

var totaltask = parseInt(document.querySelector('#home_box_result_totaltask_value').innerHTML);
var faltatask = parseInt(document.querySelector('#home_box_result_falta_value').innerHTML=metaUser);
var money = parseFloat(document.querySelector('#money').innerHTML);
var taskvalue = 0.03;

var btnAdc1 = document.querySelector('#schedule_1');
var btnRem1 = document.querySelector('#schedule_remove_1');
var valor1 = parseInt(document.querySelector('.home_box_schedule_title_1_value').innerHTML);

var btnAdc2 = document.querySelector('#schedule_2');
var btnRem2 = document.querySelector('#schedule_remove_2');
var valor2 = parseInt(document.querySelector('.home_box_schedule_title_2_value').innerHTML);

var btnAdc3 = document.querySelector('#schedule_3');
var btnRem3 = document.querySelector('#schedule_remove_3');
var valor3 = parseInt(document.querySelector('.home_box_schedule_title_3_value').innerHTML);

var btnAdc4 = document.querySelector('#schedule_4');
var btnRem4 = document.querySelector('#schedule_remove_4');
var valor4 = parseInt(document.querySelector('.home_box_schedule_title_4_value').innerHTML);

var btnAdc5 = document.querySelector('#schedule_5');
var btnRem5 = document.querySelector('#schedule_remove_5');
var valor5 = parseInt(document.querySelector('.home_box_schedule_title_5_value').innerHTML);

var btnAdc6 = document.querySelector('#schedule_6');
var btnRem6 = document.querySelector('#schedule_remove_6');
var valor6 = parseInt(document.querySelector('.home_box_schedule_title_6_value').innerHTML);

var btnAdc7 = document.querySelector('#schedule_7');
var btnRem7 = document.querySelector('#schedule_remove_7');
var valor7 = parseInt(document.querySelector('.home_box_schedule_title_7_value').innerHTML);

var btnAdc8 = document.querySelector('#schedule_8');
var btnRem8 = document.querySelector('#schedule_remove_8');
var valor8 = parseInt(document.querySelector('.home_box_schedule_title_8_value').innerHTML);

var btnAdc9 = document.querySelector('#schedule_9');
var btnRem9 = document.querySelector('#schedule_remove_9');
var valor9 = parseInt(document.querySelector('.home_box_schedule_title_9_value').innerHTML);

if(btnAdc1.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_1_value').innerHTML=++valor1;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc2.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_2_value').innerHTML=++valor2;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc3.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_3_value').innerHTML=++valor3;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc4.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_4_value').innerHTML=++valor4;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc5.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_5_value').innerHTML=++valor5;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc6.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_6_value').innerHTML=++valor6;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc7.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_7_value').innerHTML=++valor7;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc8.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_8_value').innerHTML=++valor8;
    document.querySelector('#home_box_result_totaltask_value').innerHTML=++totaltask;
    document.querySelector('#home_box_result_falta_value').innerHTML=--faltatask;
    money += taskvalue;
    document.querySelector('#money').innerHTML=money.toFixed(2);
}));

if(btnAdc9.addEventListener('click', () => {
    document.querySelector('.home_box_schedule_title_9_value').innerHTML=++valor9;
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

if(btnRem2.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_2_value').innerHTML=--valor2;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem3.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_3_value').innerHTML=--valor3;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem4.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_4_value').innerHTML=--valor4;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem5.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_5_value').innerHTML=--valor5;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem6.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_6_value').innerHTML=--valor6;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem7.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_7_value').innerHTML=--valor7;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem8.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_8_value').innerHTML=--valor8;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));

if(btnRem9.addEventListener('click', () => {
    if(totaltask > 0 ){
        document.querySelector('.home_box_schedule_title_9_value').innerHTML=--valor9;
        document.querySelector('#home_box_result_totaltask_value').innerHTML=--totaltask;
        document.querySelector('#home_box_result_falta_value').innerHTML=++faltatask;
        money -= taskvalue;
        document.querySelector('#money').innerHTML=money.toFixed(2);
    };
}));
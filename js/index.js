var success=false;
localStorage.setItem('success','false');
var unit={};
var data=[{
    name:'User1',
    password:'1234'
},
{
    name:'User2',
    password:'12345'
},
{
    name:'User3',
    password:'123'
},
{
    name:'User4',
    password:'1234'
}
];
localStorage.setItem('data',JSON.stringify(data));
function sign_in (){
   var local_data= localStorage.getItem('data');
   var info=document.getElementById('info');
    var data_update=JSON.parse(local_data);
    var log = document.getElementById('login').value;
    var pass = document.getElementById('password').value;
for (var i=0;i<data_update.length;i++){
    if (log==data_update[i].name&&pass==data_update[i].password){
        success=true;
        localStorage.setItem('success','true');
        unit.name=log;
        unit.password=pass;
        localStorage.setItem('activeUser',JSON.stringify(unit));
        break;
    }
    else{
        success=false;
    }
}
if (success){
    info.innerHTML=log+', Вход выполнен успешно';
    window.location='about.html';
}
else {
    info.innerHTML=log+', Логин или пароль неверны, пожалуйста повторите вход проверив правильность ввода';
    
}
return success;
}
function sign_up(){
    var info=document.getElementById('info');
var newUser={};
newUser.name=document.getElementById('login').value;
for (var i=0;i<data.length;i++){
if (newUser.name==data[i].name){
info.innerHTML='Такой пользователь уже есть в базе';
break;
}
else{
newUser.password=document.getElementById('password').value;
var parse_data=localStorage.getItem('data');
var massive_data=JSON.parse(parse_data);
console.log('massive_data',massive_data);
console.log ('parse_data=',parse_data);
console.log('newUser',newUser);
massive_data.push(newUser);
localStorage.setItem('data',JSON.stringify(massive_data));

info.innerHTML=newUser.name+', Вы успешно зарегистрировались!'
console.log('Вы успешно зерагистрировались');
}
}
}
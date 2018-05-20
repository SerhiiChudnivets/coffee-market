var success=localStorage.getItem('success');
success=JSON.parse(success);
var all=localStorage.getItem('allOrders');
all=JSON.parse(all);
var orders=all||[];
console.log('orders=',orders);
if (success){
var username=localStorage.getItem('activeUser');
username=JSON.parse(username);
console.log(username);
var logout_text=document.getElementById('logout-text');
logout_text.innerHTML='Welcome to the site, '+username.name;
}
else {
    window.location='index.html';
}
function logout (){
localStorage.setItem('success','false');
localStorage.removeItem('activeUser');
window.location='index.html'
}
function price(){
    summ=0;
    var drink='';
    var current_order={};
    var ingradients=[];
    var price_text=document.getElementById('price');
var espresso=document.getElementById('espresso');
var americano=document.getElementById('americano');
var latte=document.getElementById('latte');
var cappucino=document.getElementById('cappuccino');
var milk=document.getElementById('milk');
var chocolate=document.getElementById('chocolate');
var cinnamon=document.getElementById('cinnamon');
var ice_cream=document.getElementById('ice-cream');

if (espresso.checked){
    summ=16;
    drink='Espresso';
}
else if (americano.checked){
    summ=18;
    drink='Americano';
}
else if (latte.checked){
    summ=20;
    drink='Latte';
}
else {
    summ=22;
    drink='Cappuccino';
   
}
if (milk.checked){
    summ+=2;
    ingradients.push('milk');
}
 if (chocolate.checked){
    summ+=2;
    ingradients.push('chocolate');
}
if (cinnamon.checked){
    summ+=2;
    ingradients.push('cinnamon');
}
if (ice_cream.checked){
    summ+=2;
    ingradients.push('ice cream');
}

price_text.innerHTML=summ;
current_order.name=username.name;
current_order.coffee=drink;
current_order.price=summ;
current_order.ingradients=ingradients;
localStorage.setItem('currentOrder',JSON.stringify(current_order));
return current_order;
}
function send_order(){
    last_order_data=price();
    orders.push(last_order_data);
    localStorage.setItem('allOrders',JSON.stringify(orders));
    window.location='store.html';
}
var orders_data=localStorage.getItem('allOrders');
var active=localStorage.getItem('activeUser');
active=JSON.parse(active);
console.log('active',active);
var all_price=Number(0);
orders_data=JSON.parse(orders_data);
console.log ('orders=', orders_data);
var push_table=document.getElementById('all-orders');
var table='<table><tr> <th>Drink</th><th>Ingradients</th><th>Price</th></tr>'
for (var i=0;i<orders_data.length;i++){
    if (active.name==orders_data[i].name){
    
    table+='<tr> <td id="drink_'+i+'">'+orders_data[i].coffee+'</td><td id=ingradients_'+i+'">'+orders_data[i].ingradients+'</td><td id="price_'+i+'">'+orders_data[i].price+'</td> </tr>';
    all_price+=Number(orders_data[i].price);
    }
}

table+='<tr> <td><b>All price:<b></td><td></td><td>'+all_price+'</td><tr></table>';
console.log (table);
push_table.innerHTML=table;
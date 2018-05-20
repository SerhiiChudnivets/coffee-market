var success=localStorage.getItem('success');
success=JSON.parse(success);
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
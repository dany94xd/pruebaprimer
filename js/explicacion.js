// cadVariables=JSON.parse(localStorage.getItem("sesion"));

cadVariables = location.search.substring(1,location.search.length);
console.log(cadVariables);
colocarAvatar(cadVariables);


function llamar(){

	 setTimeout ("var win= window.location.href='game.html';"); 

}
function colocarAvatar(nombre){
  let img = document.getElementById("avatar");
  //var nombre="avatar1.png";
  img.innerHTML="<img src='img/"+nombre+"'>";
}

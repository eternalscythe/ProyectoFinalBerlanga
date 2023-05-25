var modal = document.getElementById("myModal");
var moreInfoBtn = document.getElementById("moreInfoBtn");
var span = document.getElementsByClassName("close")[0];
//Abrir y cerrar modal
moreInfoBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

console.log("¡Me encontraste carlos!");


//Cargar nombre de usuario
var username = sessionStorage.getItem("username");
var userMessage = document.createElement("div");
userMessage.className = "user-message";
userMessage.textContent = username ? username : "Sin identificar";
document.body.appendChild(userMessage);

// Guardar nombre de usuario
function saveUsername() {
  var usernameInput = document.getElementById("usernameInput");
  var newUsername = usernameInput.value;
  sessionStorage.setItem("username", newUsername);
  userMessage.textContent = newUsername ? newUsername : "Sin identificar";
  usernameInput.value = "";
}

function cambiarFondo() {
  if (localStorage.getItem("backgroundMode") == "noche") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (localStorage.getItem("backgroundMode") == "dia") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

function cambiarNoche() {
  var body = document.body;
  var diaMode = document.getElementById("diaMode");
  var nocheMode = document.getElementById("nocheMode");
  diaMode.classList.remove("active-mode");
  diaMode.classList.add("inactive-mode");
  nocheMode.classList.remove("inactive-mode");
  nocheMode.classList.add("active-mode");
  localStorage.setItem("backgroundMode", "noche");
  cambiarFondo();
} 
function cambiarDia() {
  nocheMode.classList.remove("active-mode");
  nocheMode.classList.add("inactive-mode");
  diaMode.classList.remove("inactive-mode");
  diaMode.classList.add("active-mode");
  localStorage.setItem("backgroundMode", "dia");
  cambiarFondo();
}



// Restaurar fondo de pantalla y modo seleccionados
var backgroundMode = localStorage.getItem("backgroundMode");
if (backgroundMode && document.getElementById("diaMode")) {
  var diaMode = document.getElementById("diaMode");
  var nocheMode = document.getElementById("nocheMode");

  if (backgroundMode === "dia") {
    diaMode.classList.remove("inactive-mode");
    diaMode.classList.add("active-mode");
    nocheMode.classList.remove("active-mode");
    nocheMode.classList.add("inactive-mode");
  } else if (backgroundMode === "noche") {
    diaMode.classList.remove("active-mode");
    diaMode.classList.add("inactive-mode");
    nocheMode.classList.add("active-mode");
    nocheMode.classList.remove("inactive-mode");
  }

}

if (localStorage.getItem("backgroundMode")){
  cambiarFondo();
}

function changeIconSize(size) {
  if (document.getElementById("diaMode")) {
    var diaMode = document.getElementById("diaMode");
    var nocheMode = document.getElementById("nocheMode");
    if (size === "small") {
      document.getElementById("small").checked = true;
      diaMode.style.width = "100px";
      nocheMode.style.width = "100px";
      localStorage.setItem("iconSize", "small");
    } else if (size === "medium") {
      document.getElementById("medium").checked = true;
      diaMode.style.width = "120px";
      nocheMode.style.width = "120px";
      localStorage.setItem("iconSize", "medium");
    } else if (size === "large") {
      document.getElementById("large").checked = true;
      diaMode.style.width = "140px";
      nocheMode.style.width = "140px";
      localStorage.setItem("iconSize", "large");
    }
  }
}

if (localStorage.getItem("iconSize")) {
  changeIconSize(localStorage.getItem("iconSize"))
}
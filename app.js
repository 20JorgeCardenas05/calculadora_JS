// function saludar() {
//     console.log("Hola papu");
// }

// saludar();

// function suma(a,b) {
//     console.log("La suma es: " + (a + b));
// }

// suma(3,4);

// function () {'Hola mundo'}

// let saludar = function () {
//     console.log("Hola mundo");
// };

// saludar();

// let saludarArrow = (nombre) => console.log("Hola " + nombre + " desde un arrow.")
 
// saludarArrow("Jorge");

// function sumavarios(a,b,...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a+b)+(c);
// }

// sumavarios(3,4,5,6,7,8,9,10);

// function sum(x, y,z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3,];
  
//   console.log(sum(...numbers));


function sumar() {
    let in1 = parseFloat(document.getElementById("n1").value);
    let in2 = parseFloat(document.getElementById("n2").value);
    let suma = in1 + in2;
    sumaa.innerHTML = ("El resultado de la suma es = " + suma);
}

function restar() {
    let in1 = parseFloat(document.getElementById("n1").value);
    let in2 = parseFloat(document.getElementById("n2").value);
    let resta = in1 - in2;
    restaa.innerHTML = ("El resultado de la resta es = " + resta);
}

function multiplicar() {
    let in1 = parseFloat(document.getElementById("n1").value);
    let in2 = parseFloat(document.getElementById("n2").value);
    let mult = in1 * in2;
    multii.innerHTML = ("El resultado de la multiplicación es = " + mult);
}

function dividir() {
    let in1 = parseFloat(document.getElementById("n1").value);
    let in2 = parseFloat(document.getElementById("n2").value);
    let div = in1 / in2;
    divv.innerHTML = ("El resultado de la división es = " + div);
}

function borrar() {
    document.getElementById("formulario").reset();
    sumaa.innerHTML = "";
    restaa.innerHTML = "";
    multii.innerHTML = "";
    divv.innerHTML = "";
}

const boton = document.querySelector(".botonclick");
function color() {
    boton.classList.toggle('negativo');
    console.log("Diste click en el botón.");
}

boton.addEventListener("click", color);

boton.addEventListener("mouseover", () => {
    console.log("Estoy encima del botón.");
});
boton.addEventListener("mouseout", () => console.log("Estoy fuera del botón."));

window.addEventListener('keydown', (e) => {
    console.log("Pulsó una tecla.");
    console.log(String.fromCharCode(e.keyCode));
});
window.addEventListener('keypress', (e) => {
    console.log("Presionó una tecla.");
    console.log(String.fromCharCode(e.keyCode));
});
window.addEventListener('keyup', (e) => {
    console.log("Dejó de presionar una tecla.");
    console.log(String.fromCharCode(e.keyCode));
});
window.addEventListener('load', () => {
    console.log("Terminé de cargar la página.");
});

const agregar = document.getElementById("agregar");

agregar.addEventListener("click", () => {
    let texto = document.getElementById("texto").value;
    areatexto.innerHTML += texto;
    document.getElementById("textoo").reset();
});

const su = document.getElementById("su");
const re = document.getElementById("re");
const mu = document.getElementById("mu");
const di = document.getElementById("di");

su.addEventListener('mouseover', () => {
    su.classList.add("ver");
});
su.addEventListener('mouseout', () => {
    su.classList.remove("ver");
});
re.addEventListener('mouseover', () => {
    re.classList.add("ver");
});
re.addEventListener('mouseout', () => {
    re.classList.remove("ver");
});
mu.addEventListener('mouseover', () => {
    mu.classList.add("ver");
});
mu.addEventListener('mouseout', () => {
    mu.classList.remove("ver");
});
di.addEventListener('mouseover', () => {
    di.classList.add("ver");
});
di.addEventListener('mouseout', () => {
    di.classList.remove("ver");
});
borrrar.addEventListener('mouseover', () => {
    borrrar.classList.add("verb");
});
borrrar.addEventListener('mouseout', () => {
    borrrar.classList.remove("verb");
});
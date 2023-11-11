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
}

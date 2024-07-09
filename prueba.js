"use strict";

alert("Bienvenidos al juego de adivinar el número");

const numeroSecreto = 5;
let numeroUsuario = 0;
let numeroIntentos = 0;

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("Ingresa un número entre 1 y 10:");

  if (numeroSecreto == numeroUsuario) {
    numeroIntentos += 1;
    alert(
      `Has acertado! El número secreto es ${numeroSecreto} y lo lograste en ${numeroIntentos} intentos`
    );
  } else {
    if (numeroSecreto < numeroUsuario) {
      numeroIntentos += 1;
      alert("El número secreto es menor");
    } else {
      numeroIntentos += 1;
      alert("EL numero secreto es mayor");
    }
  }
}

/*
"use strict";

alert("Bienvenidos al juego de adivinar el número");

const numeroSecreto = 4;

const numeroUsuario = prompt("Ingrese un número del 1 - 10");

if (numeroSecreto == numeroUsuario) {
  console.log(`Has acertado! El número secreto es ${numeroSecreto}`);
} else {
  if (numeroSecreto < numeroUsuario) {
    console.log("El número secreto es menor");
  } else {
    console.log("EL numero secreto es mayor");
  }
}
*/

let longitud: number = 0;
let nombre: string[] = new Array(longitud);
let anio: number[] = new Array(longitud);
let altura: number[] = new Array(longitud);

function cargarLongitudArreglos(longitudLocal: number) {
  longitudLocal = Number(prompt("ingrese la longitud del arreglo"));
  if (isNaN(longitudLocal)) {
    alert("usted ingreso un valor incorrecto");
    cargarLongitudArreglos(longitudLocal);
  } else if (longitudLocal <= 0) {
    alert("usted ingreso un valor incorrecto");
    cargarLongitudArreglos(longitudLocal);
  } else {
    console.log("la longitud del arreglo es: " + longitudLocal);
    return (longitud = longitudLocal);
  }
}

function cargarVectores(
  v1: string[],
  v2: number[],
  v3: number[],
  longitudLocal: number
) {
  for (let i: number = 0; i < longitudLocal; i++) {
    v1[i] = String(prompt("ingrese el nombre de la persona"));
    v2[i] = Number(prompt("ingrese la edad"));
    v3[i] = Number(prompt("ingrese la altura (en cm)"));
    console.log(
      "usted ingreso los siguientes datos:",
      "nombre " + v1[i],
      "edad " + v2[i],
      "altura " + v3[i]
    );
  }
  nombre = v1;
  anio = v2;
  altura = v3;
}

cargarLongitudArreglos(longitud);
cargarVectores(nombre, anio, altura, longitud);

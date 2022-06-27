let longitud: number = 0;
let nombre: string[] = new Array(longitud);
let edad: number[] = new Array(longitud);
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
      "usted ingreso los siguientes datos en la posicion" + (i + 1),
      ":",
      "Nombre: " + v1[i],
      "Edad: " + v2[i],
      "Altura: " + v3[i]
    );
  }
  nombre = v1;
  edad = v2;
  altura = v3;
}

function swap(array_1: any, i: number, j: number) {
  let aux: number;
  aux = array_1[i];
  array_1[i] = array_1[j];
  array_1[j] = aux;
}

function bubbleSort(
  array_1: number[],
  array_2: number[],
  array_3: any,
  longitud: number
) {
  let i, j: number;
  for (i = 0; i < longitud; i++) {
    for (j = 0; j < longitud - i; j++) {
      if (array_1[j] > array_1[j + 1]) {
        swap(array_1, j, j + 1);
        swap(array_2, j, j + 1);
        swap(array_3, j, j + 1);
      } else if (array_1[j] === array_1[j + 1] && array_2[j] > array_2[j + 1]) {
        swap(array_1, j, j + 1);
        swap(array_2, j, j + 1);
        swap(array_3, j, j + 1);
      }
    }
  }
}

function imprimirArray() {
  console.log("los valores ordenados son:");
  for (let i = 0; i < longitud; i++) {
    console.log(
      "en la posicion" + (i + 1),
      "Nombre: " + nombre[i],
      "Edad: " + edad[i],
      "Altura: " + altura[i]
    );
  }
}

cargarLongitudArreglos(longitud);
cargarVectores(nombre, edad, altura, longitud);
bubbleSort(edad, altura, nombre, longitud);
imprimirArray();

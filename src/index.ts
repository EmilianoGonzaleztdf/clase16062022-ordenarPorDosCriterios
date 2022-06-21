let longitud: number = 0;
let nombre: string[] = new Array(longitud);
let anio: number[] = new Array(longitud);
let altura: number[] = new Array(longitud);

function cargarLongitudArreglos(longitudLocal: number) {
  longitudLocal = Number(prompt("ingrese la longitud del arreglo"));
  if (isNaN(longitudLocal)) {
    console.log("usted ingreso un valor incorrecto");
  } else if (longitudLocal <= 0) {
    console.log("usted ingreso un valor incorrecto");
  } else {
    console.log();
    return (longitud = longitudLocal);
  }
}

function cargarVectores(v1: string[], v2: number[], v3: number[], i: number) {}
cargarLongitudArreglos(longitud);

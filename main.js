/*1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.*/

export function deleteFirstAndLast(str) {
  const newStr = str.slice(1, -1);
  return newStr;
}
/*2. Escribe una función que reciba una palabra y revise si es un palíndromo.*/

/*1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.*/

export function deleteFirstAndLast(str) {
  const newStr = str.slice(1, -1);
  return newStr;
}
/*2. Escribe una función que reciba una palabra y revise si es un palíndromo.*/

export function isPalindrome(inputWord) {
  const reverseString = inputWord.split('').reverse('').join('');
  return inputWord === reverseString;
}

/*3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.*/
export function vocal(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      contador++;
    }
  }
  return contador;
}

/*4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).*/

/*5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.*/
export function allVocal(str) {
  return str.includes('a' && 'e' && 'i' && 'o' && 'u');
}
console.log(allVocal('murcielago'));

/*6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.*/
/*7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.*/
/*8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.*/
export function oldMayor(str) {
  if (str >= 18) {
    return `is over 18`;
  }
  return 'mierdsaa saecs';
}
console.log(oldMayor(10));

/*9. Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.*/

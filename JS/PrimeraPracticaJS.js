// 1.1.- Digues quins d'aquests noms de variables són correctes i quins no.
// 1. variAble
// 2. Variable
// 3. vari-able
// 4. vari_able
// 5. _variable
// 6. vari.able
// 7. vari4able
// 8. 4variable
// 9. variable4
// 10.variable_4
// 11.LaMevaVariable

let variAble; // Correcte
let Variable; // Correcte
// let vari-able; // Incorrecte
let vari_able; // Correcte
let _variable; // Correcte
// let vari.able;     // Incorrecte
let vari4able; // Correcte
// let 4variable; // Incorrecte
let variable4; // Correcte
let variable_4; // Correcte
let LaMevaVariable; // Correcte


// 1.2.- Digues quins d'aquests noms de variables són correctes i quins no.
// 1. nomEmpleat Correcte
// 2. Nom_empleat Correcte
// 3. NomEmpleat Correcte
// 4. nomEmpleat Correcte
// 5. Nom_empleat Correcte
// 6. _NomEmpleat Correcte
// 7. nomEmpleat0 Correcte
// 8. nom_empleat Correcte
// 9. nom0empleat Correcte
// 10.Nom empleat Incorrecte

//2.1-Què passaria si féssim aquestes declaracions de variables? 
// Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
//i veure que passa (si passa alguna cosa). //
// a.-
// var a = 1;
// var a = 2;
// console.log(a);  Es reescriu el valor de la variable a, per tant el resultat serà 2
// // b.-
// var a = 1;   
// let a = 2;
// console.log(a); No pots declarar amb let una variable declarada amb var.
// // c.-
// let a = 1; 
// var a = 2;
// console.log(a); No pots declarar amb var una variable declarada amb let.
// // d.-
// let a = 1; 
// let a = 2; 
// console.log(a); No pots declarar dues vegades la mateixa variable amb let.

//errors java :) https://github.com/denysdovhan/wtfjs#true-is-not-equal--but-not-equal--too
console.log(true == ![])
console.log(true == []) 
console.log([1,2,3] + [4,5,6]) // "1,2,34,5,6"



// 3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignació com si fos independent.
let a1 = 5; // Correcte
//let b1 = 5z; // Incorrecte perquè no es pot posar una lletra després d'un número
let c1 = "c"; // correcte
//let c11 = "c'; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la 
// let c12 = "c'c'c"; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la
// let c13 = "c'c"c' '; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la
//let n1 = 35; // correcte
//let n12 = 35va; //incorrecte perquè no es pot posar una lletra després d'un número


// 3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
// línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.
let a12 = 5; // correcte
//let b12 = c12; // incorrecte perquè la variable c12 no està definida abans d'assignar-la a b12
c12 = 7; // correcte



// 3.3.- De quins tipus són les dades que assignem a aquestes variables?
// let a13 = 55; // tipus number
// let b13 = 55.5;  // tipus number
// let c14 = "Hola"; // tipus string
// let d14 = 'Hola'; // tipus string
// let e14 = true; // tipus boolean

// // 4.1.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// let a0 = 25; // 25
// let b0 = 15 + a0; // 40
// let c0 = b0 * 2; // 80
// console.log(a0,b0,c0);

// // 4.2.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// let a = 10; 
// let b = 20;
// let c = 5;
// a = a + 3; // 13 = a
// b = b + 4 - a; // 20 + 4 - 13 = 11 = b
// c = a + b + c; // 13 + 11 + 5 = 29 = c
// a = a + c; // 13 + 29 = 42 = a
// b = 4; // 4 = b
// c = c + 3 - b + 2; // 29 + 3 - 4 + 2 = 30 = c
// console.log(a,b,c); // 42 4 30



// 4.3.- Quins valors s'escriuran a la consola després d'executar aquest codi?
// Escriu-los en un paper i desprès executa el codi. Et donen el mateix?
// let a = 5;
// let b = 18;
// let c = 15;
// let d = 22;
// a = a + 10; // 15 = a
// b = b + 5 - c; // 18 + 5 - 15 = 8 = b
// c = c + 4 + b; // 15 + 4 + 8 = 27 = c
// d = d + b + a; // 22 + 8 + 15 = 45 = d
// a = a + 1; // 16 = a
// b = b + c; // 8 + 27 = 35 = b
// c = b + c; // 35 + 27 = 62 = c
// d = b + b; // 35 + 35 = 70 = d
// console.log(a,b,c,d); // 16 35 62 70

// 4.6. - Quins valors s’escriuran a la consola si executem aquest programa?

// let a = 10; 
// let b = 5;
// let c = a / b; // 10 / 5 = 2
// let d = a * b; // 10 * 5 = 50
// let e = a % 3; // 10 % 3 = 1
// console.log (c,d,e); // 2 50 1


// 4.7.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 10; 
// let b = 5;
// let c = a * b * 3; // 10 * 5 * 3 = 150
// let d = a / 3; // 10 / 3 = 3.333...
// console.log(c,d);  // 150 3.3333333333333335






// 5.1.- Què s’escriurà a la consola si executem aquest codi?
// let a = 5;
// a++;
// console.log(a); // 6
// let b = a++; 
// console.log(a,b); // a = 7 ; b = 6 

// 5.2.- Què s’escriurà a la consola si executem aquest codi?
let a = 5; 
++a; 
console.log(a); // 6
let b = ++a;
console.log(a,b); // a = 7 ; b = 7










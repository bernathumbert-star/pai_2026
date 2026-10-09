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

// let variAble; // Correcte
// let Variable; // Correcte
// // let vari-able; // Incorrecte
// let vari_able; // Correcte
// let _variable; // Correcte
// // let vari.able;     // Incorrecte
// let vari4able; // Correcte
// // let 4variable; // Incorrecte
// let variable4; // Correcte
// let variable_4; // Correcte
// let LaMevaVariable; // Correcte


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
// let a1 = 5; // Correcte
// //let b1 = 5z; // Incorrecte perquè no es pot posar una lletra després d'un número
// let c1 = "c"; // correcte
//let c11 = "c'; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la 
// let c12 = "c'c'c"; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la
// let c13 = "c'c"c' '; // Incorrecte perquè no es pot posar una cometa simple dins d'una cadena de text amb cometes dobles sense escapar-la
//let n1 = 35; // correcte
//let n12 = 35va; //incorrecte perquè no es pot posar una lletra després d'un número


// 3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una
// línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.
// let a12 = 5; // correcte
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
// let a = 5; 
// ++a; 
// console.log(a); // 6
// let b = ++a;
// console.log(a,b); // a = 7 ; b = 7


// // 5.3.- Observa aquestes operacions, prova a executar-les i explica el perquè dels resultats obtinguts.
// console.log("aqui");

// let a = 5; // a = 5
// let b = a++; // b = 5, a = 6
// let c = a--; // c = 6, a = 5
// console.log(a,b,c); // 5 5 6
// a = 5; // a = 5
// b = ++a; // b = 6, a = 6
// c = --a; // c = 5, a = 5
// console.log(a,b,c); // 5 6 5
// a = 5;
// let d = 25 + a++; // d = 25 + 5 = 30, a = 6
// a = 5; // a = 5
// let e = 25 + ++a; // e = 25 + 6 = 31, a = 6
// console.log(d,e); // d = 30, e = 31


// // 6.1.- Què s’escriurà a la consola si executes aquest codi?
// let a = 10;
// a += 5; // a = a + 5 = 15
// console.log(a); // 15
// a *= 5; // a = a * 5 = 75
// console.log(a); // 75
// a -= 5; // a = a - 5 = 70
// console.log(a); // 70
// a /= 5; // a = a / 5 = 14
// console.log(a); // 14


// // 7.1.- Quines d’aquestes assignacions de cadenes de caràcters són incorrectes?
// let a = "Hola";
// let b = 'Hola';
// // let c = 'Hola"; // incorrecte
// let d = "Hola 'gramola'"; // correcte 
// // let e = 'Hola "gramola'";// incorrecte

// 7.2.- Què s’escriurà a la consola si executes aquest codi?
// let a = "Hola";
// let b = "Adéu";
// console.log (a+b); // HolaAdéu
// let c = a + 2;
// console.log (c); // Hola2
// let d = a + b + 2;
// console.log (d); // HolaAdéu2

// Comparacions
// 8.1.- Què s’escriurà a la consola si executes aquest codi?
// let a = 5, b = 7; 
// let c = 5,d = "5"; // c és un number i d és un string
// let e1 = a == b; // false, perquè 5 no és igual a 7
// let e2 = c == d; // true, perquè 5 == "5" (conversió de tipus)
// let e3 = c === d; // false, perquè 5 és un number i "5" és un string, i === compara tant valor com tipus
// console.log(e1,e2,e3);


// // 8.2.- Què s’escriurà a la consola si executes aquest codi?
// let a = true;
// let b = false;
// let c1 = true === false; // false
// let c2 = true == 1; // true
// let c3 = true === 1; // false
// let c4 = false == 1; // false
// // true ==1 , false ==0 
// console.log(c1,c2,c3); // false true false

// // 8.3.- Què s’escriurà a la consola si executes aquest codi?
// let a = 10;
// let b = 20;
// console.log (a > b, a < b); // false true


// 8.4.- Què s’escriurà a la consola si executes aquest codi?
// let a = "Hola";
// let b = "hola";
// let c = "Adéu";
// let d1 = a === b; // false
// let d2 = a < b; // true, perquè "H" és menor que "h" en la taula ASCII
// let d3 = a < c; // true, perquè "H" és menor que "A" en la taula ASCII
// console.log (d1,d2,d3);

// 8.5.- Què s’escriurà a la consola si executes aquest codi? Per què?
// let a = 9;
// let b = 7;
// let c = 3;
// let d = a < b < c; // 9 < 7 < 3
// console.log(d); // true, perquè 9 < 7 és false, i false es converteix a 0, i 0 < 3 és true  
// // Igual això t’ajuda a explicar-lo
// console.log (true == 1);
// console.log (false == 0);



// Operadors lògics
// 9.1.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.
// & --> AND

// console.log(true && true); // true
// console.log(true && false); //false
// console.log(false && (3 == 4)); // false, perquè 3 == 4 és false, i false && false és false
// console.log(false && true); // false, perquè false && true és false
// console.log(false && false); // false, perquè false && false és false
// // 9.2.- Quins valors escriuran a la consola aquestes expressions? Explica el perquè.
// // || --> OR

// console.log(false || false); // false, perquè false || false és false
// console.log(false || true); // true, perquè false || true és true
// console.log(false || (3 == 4)); // false, perquè 3 == 4 és false, i false || false és false
// console.log(true || true); // true, perquè true || true és true
// console.log(true || false); // true, perquè true || false és true

// Prioritat dels operadors
// 10.1.- Quins valors s’escriuran a la consola si executem aquest programa? Atenció a la prioritat de les operacions
// let a = 5;
// let b = 10;
// let c = 2;
// a = a + b * c; // Pensa bé quin hauria de ser el resultat
// // d’aquesta operació. 30? o 25?  
// console.log(a); // 25
// let r = a % b + 1; // Quina operació és %? et fa la divisio i et dona el residu. Per tant, 25 % 10 = 5, i 5 + 1 = 6
// let d = c + a / b; // 25/10 = 2.5, i 2 + 2.5 = 4.5
// console.log(d,r); // 4.5 6


// 10.2.- Quins valors s’escriuran a la consola si executem aquest programa?
// let a = 5;
// let b = 6;
// let c = 2;
// let d1 = a + b * c; // 5 + 6 * 2 = 5 + 12 = 17
// let d2 = (a + b) * c; // (5 + 6) * 2 = 11 * 2 = 22
// let d3 = a - b * c + a / c + 6 % 5; // 5 - 6 * 2 + 5 / 2 + 6 % 5 = 5 - 12 + 2.5 + 1 = -3.5
// console.log (d1,d2,d3); // 17 22 -3.5


// 10.3.- Quins valors s’escriuran a la consola si executem aquest programa?
// let e1 = false && false || true; // true
// let e2 = false || false && true; // false
// console.log(e1,e2); // true false

// 10.4.- Quins valors s’escriuran a la consola si executem aquest programa?
// És molt important que ho intentis fer a mà abans de provar-lo a l’ordinador.
// let a = 5;
// let b = 4;
// let e1 = a > b || a < b; // true || false = true
// let e2 = a > b && a < b; // true && false = false
// let e3 = e1 || e2; // true || false = true
// let e4 = a <= b + 1 && b - 1 * 5 < 0; // true && true = true
// // Atenció a la prioritat de les operacions!!!
// console.log (e1,e2,e3,e4); // true false true true


// L’operador interrogant
// 11.1.- Explica el que fa aquest programa.
// let a = prompt ("Introdueix un número"); // demana a l'usuari introduir un numero i l'associa a la variable a
// let b = (a>=18) ? "Ets major d’edat":"No ets major d’edat";
// console.log (b); //es compara el numero introduit per a saber si es igual o major de 18 i determinar si l'usuari es major o menor d'edat, et retorna un missatge corresponent a si ho ets o no.
// 11.2.- Escriu un programa que demani dos números (fent servir la instrucció prompt) i escrigui a la consola quin és el més gran. Fes servir l’operador interrogant (?)
// let a = prompt ("introdueix un numero")
// let b = prompt ("introdueix un altre numero")
// // if (a > b) console.log("El numero més gran és: " + a)
// // else console.log("El numero més gran és: " + b)

// //suggerencia de la ia (optim)
// let c = (a > b) ? a : b 
// console.log (c)

// 11.3.- Escriu un programa que demani dues paraules (fent servir la instrucció prompt) i ens digui si les dues paraules són iguals.

// let a = prompt ("introdueix una paraula")
// let b = prompt ("introdueix un altre paraula")
// if (a === b) console.log("Les dues paraules són iguals.")
// else console.log("Les dues paraules no són iguals.")


// Problemes
// 12.1.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) escrigui a la consola el doble, el triple i el quadrat del número llegit. 

// let a = prompt ("Introdueix un número")
// console.log("el doble del numero és:" + 2*a, "el triple és:" + 3*a, "el quadrat és:" +a*a)

// 12.2.- Fes un programa en JavaScript que calculi el perímetre i l’àrea d’un rectangle de 20 i 80 metres de costat. Modifica el programa perquè els valors dels costats es demanin amb prompt().
// function calcularRectangle(a,b) {
//     let perimetre = 2*(a+b)
//     let area = a*b
//     console.log("perimetre:" + perimetre, "area:" + area) 
// }

// let a = 20
// let b = 80
// calcularRectangle(a,b)

// let a2 = Number (prompt ("introdueix el valor del costat del rectangle:"))
// let b2 = Number (prompt ("introdueix el valor del altre costat del rectangle:"))

// calcularRectangle(a2,b2)



// 12.3.- Fes un programa que, donat el radi d’una circumferència, calculi, a una nova variable i escrigui a la consola, la longitud de la circumferència i l’àrea del cercle. Fes servir una constant per guardar el número pi (3,141593) a) Longitud de la circumferència: 2 * 3.1416 * ràdio b) Àrea del cercle: 3.1416 * radio^2 

// function calcularCircunferencia(radio) {
//     let pi = 3.141593
//     let area = pi * radio**2
//     let perimetre = 2 * pi * radio
//     console.log ("l'area és:" + area, "el perímetre és:" + perimetre)
// }
// let radio = Number (prompt("introdueix el radi de la circumferencia:"))
// calcularCircunferencia(radio)

// 12.4.- Escriu un programa en JavaScript que calculi el sou mensual a partir del nombre d’hores treballades (160 hores) i el preu per hora treballada (12€). Prova amb altres valors.

function CalculSou(hores, preu) {
    let sou = hores * preu
    console.log(sou)
}

let hores = Number(prompt ("introdueix les hores treballades:"))
let preu = Number(prompt ("introdueix el salari per hora treballada:"))
CalculSou(hores, preu)



// 12.5.- Fes un programa en JavaScript que, donades dues variables x i y, intercanviï els seus
// valores de manera que x acabi tenint el valor de y i y acabi tenint el valor de x. Així, si
// inicialment tenim: let x = "Hola", y = 3; Quan el programa acabi, x haurà de guardar un 3 i y
// un “Hola”.
// 12.6.- Fes un programa que escrigui a la consola el cub d’un número llegit per teclat (amb el
// prompt())
// 12.7.- Escriu un programa d’una sola línia que faci que aparegui a la pantalla un alert que
// digui “Hello World”.
// 12.8.- Escriu un programa de dues línies que demani el nom de l’usuari amb un prompt() i
// escrigui un text a la consola que digui “Hola nomUsuari”











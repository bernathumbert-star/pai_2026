// Exercicis de programació
// Estructures alternatives i iteratives
// Condicional simple: if
// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.

// let numero3 = prompt("introdueix el numero:")
// let numero = 1
// let numero2 = -1

// if (numero3 < 0) {  
//     console.log("el numero és negatiu")
// }


// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.
// let numero = Number(prompt("introdueix un numero:"));
// if (numero % 2 === 0){
//     console.log("el numero és parell");
// }

// 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas.

// let numero = Number(prompt("escriu un numero"))

// if (numero % 2 === 0){
//          console.log("el numero és parell");
// }

// if (numero % 2 !== 0){
//          console.log("el numero és senar");
// }

// 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let num1 = Number(prompt("Primer numero"))
// let num2 = Number(prompt("Segon numero"))

// if (num1>num2){
//     console.log("el primer numero és major")
// }
// if (num1<num2){
//     console.log("el segon numero és major")
// }


// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels números és el més gran.

// let num1 = Number(promp("introdueix el primer numero"))
// let num2 = Number(promp("introdueix el segon numero"))
// let num3 = Number(promp("introdueix el tercer numero"))

// if (num1>num2 && num1>num3){
//      console.log("el primer numero és major")
// }
// if (num2>num1 && num2 > num3){
//      console.log("el segon numero és major")
// }
// if (num3 > num1 && num3 > num2){
//     console.log("el tercer numero és major")
// }


// 13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.  Condicional doble: if - else

//     let mes = Number(prompt("Introdueix un número de mes (del 1 al 12):"));

// if (mes === 1) {
//     console.log("Gener");
// }
// if (mes === 2) {
//     console.log("Febrer");
// }
// if (mes === 3) {
//     console.log("Març");
// }
// if (mes === 4) {
//     console.log("Abril");
// }
// if (mes === 5) {
//     console.log("Maig");
// }
// if (mes === 6) {
//     console.log("Juny");
// }
// if (mes === 7) {
//     console.log("Juliol");
// }
// if (mes === 8) {
//     console.log("Agost");
// }
// if (mes === 9) {
//     console.log("Setembre");
// }
// if (mes === 10) {
//     console.log("Octubre");
// }
// if (mes === 11) {
//     console.log("Novembre");
// }
// if (mes === 12) {
//     console.log("Desembre");
// }



// 14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el
// número llegit és positiu” en cas contrari.
// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.
// 14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// quin és el més gran. Només pots fer servir una instrucció if-else.
// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola
// quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així,
// comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el
// tercer.
// 14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la
// consola els tres números ordenats.
// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25
// 13.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el resultat de restar al nombre més gran el nombre més petit.
// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que
// el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.
// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”
// Si totes les dades són correctes, escriurà el preu final.
// Condicional múltiple: switch
// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número
// de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.
// 15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on
// posa dues dades:
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de
// 3.95
// 2. Quin d’aquests sabors vol:
// 1. Vainilla o Xocolata. No cal afegir res
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final.
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final.
// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor.
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error
// dades mal introduïdes”.
// Si totes les dades són correctes, escriurà el preu final.
// 15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l -
// dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o
// festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.
// Bucles: for
// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”.
// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.
// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els
// nombres entre 1 i N.
// 16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial
// d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.
// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M)
// calculi la suma de tots els números entre N i M (ambdós inclosos).
// 16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números
// parells entre 2 i N.
// 16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de
// multiplicar de N.
// 16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números
// de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1
// 16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)
// 16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el
// número introduït sigui 5).
// *
// **
// ***
// ****
// *****
// 16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la
// següent:
// Si N ← 2 i M ← 5
// Sortida per consola:
// 2 22 222 2222 22222
// La suma de la sèrie és:24690
// Bucles: while
// 17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el
// text “Estem fent bucles”.
// 17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els
// nombres del 5 al 20.
// 17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a
// la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa
// si N < 1
// 17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número
// N donat.
// La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en
// compte que els dos primers són 1 i 1.
// Així, els 7 primers números de Fibonnacci són:
// 1 1 2 3 5 8 13
// Els dos primers són 1 i 1
// El tercer és 1 + 1 → 2
// El quart és 1 + 2 → 3
// El cinquè és 2 + 3 → 5
// El sisè és 3 + 5 → 8
// El setè és 5 + 8 → 13
// 17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de
// multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en
// cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és
// més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més
// clar el nombre).
// Per exemple, si els nombres introduits són 200000 i 5000 els resultat per consola hauria de
// ser:
// 200000, 400000, 600000, 800000, 1000000
// I ja no s’escriuria res més doncs 1000000 és més gran que 999999
// Bucles: do-while
// 18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10
// cops el text “Estem fent bucles”.
// 18.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els
// nombres del 5 al 20.
// 18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N,
// escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el
// que passa si N < 1.
// 18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és
// primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha
// algun número entre 1 i N que sigui divisor de N).
// 18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la
// instrucció prompt), 10 números, i ens digui quin és el més gran. 
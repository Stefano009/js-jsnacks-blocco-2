//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// //first number
// var firstNumber = parseInt(prompt("inserire il primo numero da confrontare"));
// //second number
// var secondNumber = parseInt(prompt("inserire il secondo numero da confrontare"));
// //check the higher number and print it
// if (firstNumber > secondNumber) 
// {

//     console.log(firstNumber);
 
// } else if ( secondNumber > firstNumber) {
 
//     console.log(secondNumber);

// } else 
// {
//     console.log("i numeri sono uguali");
// }

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//words request
// var firstWord = prompt("inserire una parola");
// console.log(firstWord);
// var secondWord = prompt("inserire una seconda parola");
// console.log(secondWord);
// // print the shortest word then the longest
// if (firstWord.length < secondWord.length) 
// {
//     console.log("la parola più corta è " + firstWord);
//     console.log("la parola più lunga è " + secondWord);
// } else if  (firstWord.length > secondWord.length) 
// {
//     console.log("la parola più corta è " + secondWord);
//     console.log("la parola più lunga è " + firstWord);
// } else 
// {
//     console.log("le parole sono lunghe uguali, la prima è " + firstWord);
//     console.log("le parole sono lunghe uguali, la seconda è " + secondWord);
// }

//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
/*
var sum = 0;
var average = [];
var averageNumber;

for (i=0; i < 5; i++) {
    average.push(parseInt(prompt("inserisci un numero da sommare")));
    sum = sum + average[i];
}
averageNumber = sum / i;
console.log(average);
console.log("la somma dei numeri inseriti è " + sum);
console.log("the average number is " + averageNumber);

*/
// var sum = 0;
// var average = [];
// var averageNumber;
// var i = 0;

// while (i < 5) {
//     average.push(parseInt(prompt("inserisci un numero da sommare")));
//     sum = sum + average[i];
//     i++;
// }
// averageNumber = sum / i;
// console.log(average);
// console.log("la somma dei numeri inseriti è " + sum);
// console.log("the average number is " + averageNumber);

// var sum = 0;
// var average = [];
// var averageNumber;
// var i = 0;
// do {
// average.push(parseInt(prompt("inserisci un numero da sommare")));
// sum += average[i];
// i++;
// }
// while (i < 5)
// averageNumber = sum / i;
// console.log(average);
// console.log("la somma dei numeri inseriti è " + sum);
// console.log("the average number is " + averageNumber);

//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

//
// var oddNumbers = [];
// var numbers;

// for (i=0; i < 6; i++) {
//     numbers = parseInt(prompt("inserisci un numero"));
//     if (numbers % 2 != 0)
//     oddNumbers.push(numbers);
// }
// console.log(oddNumbers);


// var oddNumbers = [];
// var numbers;
// var i = 0
// while (i < 6) {
//     numbers = parseInt(prompt("inserisci un numero"));
//     if (numbers % 2 != 0)
//     oddNumbers.push(numbers);
//     i++;
// }
// console.log(oddNumbers);

// var oddNumbers = [];
// var userNumbers;
// var i = 0; 
// do {
//     userNumbers = parseInt(prompt("inserisci un numero"));
//     if (userNumbers % 2 != 0 && isNaN(userNumbers) == false)
//     oddNumbers.push(userNumbers);
//     if (isNaN(userNumbers) == false)
//     i++;
// } while (i < 6) 
// console.log(oddNumbers);

// var oddNumbers = [];
// var numbers;
// var i = 0
// while (i < 6) {
//     do {
//     numbers = parseInt(prompt("inserisci un numero"));
//     } while (isNaN(numbers) == true) 
//     if (numbers % 2 != 0)
//     oddNumbers.push(numbers);    
//     i++;
// }
// console.log(oddNumbers);

// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// var number
// do
//     number = parseInt(prompt("inserisci un numero"));
// while(isNaN(number))
// //condizione pari o dispari + 1
// if (number % 2 == 0)
//     console.log(number);
//     else
//     console.log(number + 1);


// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
// var names = ["Ciro", "Antonio", "Francesco", "Giovanni"];
// var lastNames =  ["Esposito", "Boolean", "Rossi", "Bianchi"];
// var randomNames = [];

// for (var i = 0; i < names.length; i++) {
//     randomNames[i] = names[Math.floor(Math.random() * names.length)] + " " +lastNames[Math.floor(Math.random() * names.length)];
// }
// console.log(randomNames);


//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// var number =  [];
// var length = 10;
// var sum = 0;
// for (var i = 0; i < length; i++){
//     number.push(Math.floor(Math.random() * length));
// }
// console.log(number)
//     for(k = 1; k < length; k += 2)
//         sum += number[k];
// console.log(sum);

//PER OGGI POMERIGGIO PER CHI NON E' UN PELANDRONE
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

var longArray = [];
var shortArray = [];
var longLength = 10;
var shortLength = 5;
var max = 50;
var min = 25;
// Math.random() * (max - min) + min; (formula mdn per selezionare un numero random da max a min)
for (var i = 0; i < longLength; i++)
    longArray.push(Math.floor(Math.random() * (max - min) + min));
    console.log(longArray);
for (var k = 0; k < shortLength; k++)
    shortArray.push(Math.floor(Math.random() * (max - min) + min));
    console.log(shortArray);
while(shortArray.length != longArray.length)
    shortArray.push(Math.floor(Math.random() * (max - min) + min));
    console.log(longArray);
    console.log(shortArray);
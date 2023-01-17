"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken
// Funktionsaufruf (call)
// test();


// Funktionsrumpf (body)| callee
// Funktionsdeklaration
function test(){}


/****** Funktionen 02a ************/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler Scope!

function ausgabeNamen() {
//    let firstName = "Martin";
//    console.log("Hallo" + " " + firstName + "!")
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() {
    let firstName = "Heinrich"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}



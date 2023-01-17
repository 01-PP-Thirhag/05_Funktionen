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


/******Funktion 02b*********/
// 2b. Parametriesierung + Datenübergabe von AUSSEN

ausgabeNamenParam();

function ausgabeNamenParam(firstName) {
    console.log("Hallo" + " " + firstName + "!")}
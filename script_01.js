"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken
// Funktionsaufruf (call)
// test();
// test();
// test();
// test();
// test();
// test();

// Funktionsrumpf (body)| callee
// Funktionsdeklaration
function test()


/****** Funktionen 02a ************/
// 2a. Parametrisierung + Datenübergabe vin INNEN

ausgabeNamen();
console.log(firstName); // Fehler Scope!

function ausgabeNamen() {
   let firstName = "Martin";
   console.log("Hallo" + firstName + "!")
}

var myName = 'Larisa';
let myAge = 41;
var iHaveChildren = true;
let bigInt = 880092828382101498020934982132112312321n;
var itsNull = null;
let itsUndefined = undefined;
var iAm = {
    name : 'larisa',
    age : 41
}
let symbol = Symbol("id");
iAm[symbol] = 'la';

// Number

console.log(Number(myName), Number(myAge), Number(iHaveChildren), Number(bigInt), Number(itsNull), Number(undefined), Number(iAm), Number('la'));

// String

console.log(String(myName), String(myAge), String(iHaveChildren), String(bigInt), String(itsNull), String(undefined), String(iAm), String('la'));

// Boolean

console.log(Boolean(myName), Boolean(myAge), Boolean(iHaveChildren), Boolean(bigInt), Boolean(itsNull), Boolean(undefined), Boolean(iAm), Boolean('la'));
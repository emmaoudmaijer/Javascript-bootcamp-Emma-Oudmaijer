/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


function min(a,b){
    var laagsteGetal = Math.min(a,b);
    return laagsteGetal;
}


console.log(min(0, 10));
console.log(min(0, -10));
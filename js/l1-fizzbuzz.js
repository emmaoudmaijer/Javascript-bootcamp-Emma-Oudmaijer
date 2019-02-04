/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var deelbaar3 = 0;
var deelbaar5 = 0;

for (var i = 1; i < 101; i++) {
    
    
    deelbaar3 = i % 3;
    deelbaar5 = i % 5;
    
    if(deelbaar3==0 && deelbaar5==0){
        console.log("FIZZBUZZ");
    } 
    else if(deelbaar3==0){
            console.log("FIZZ");
    } 
    else if(deelbaar5==0){
                console.log("BUZZ");
    } 
    else{
        console.log(i);
    }
     
}
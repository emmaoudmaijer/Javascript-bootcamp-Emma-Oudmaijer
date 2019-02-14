/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


/*--------------------------------------------------------------- 
    deze functie zet een reeks met getallen om in een array
---------------------------------------------------------------*/
function range(a,b,c){
    
    var numbers = [];
    var counter = 0;
    
    if (c == -1){
        
        for (i = a; i >= b; i = i -1){
            numbers[counter]=i;
            counter++;
        }
    } else{
        for (i = a; i <= b; i++){
            numbers[counter]=i;
            counter++;
        }
        
    }
    
    return numbers;
}


/*--------------------------------------------------------------- 
    deze functie telt een array met getallen op
---------------------------------------------------------------*/
function sum(a){
    var aantal = 0;
    
    for (var i = 0; i < a.length; i++) {
        aantal += a[i];
    }
    
    return aantal;
}



console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(5, 2, -1)));
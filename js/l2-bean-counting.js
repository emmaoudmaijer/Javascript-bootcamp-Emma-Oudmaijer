/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/ 


/*--------------------------------------------------------------- 
    deze functie telt het aantal keren dat de letter B, voorkomt 
    in woord "a" 
---------------------------------------------------------------*/
function countBs(a){
    
    var count=0;
    
    for (var i=0; i<a.length;i++){
                
        if(a[i]=="B"){count++;}
    }
    
    return count;
}



/*---------------------------------------------------------------------   
    deze functie telt het aantal keren dat de letter die var "b" staat,
    voorkomt in woord "a"
---------------------------------------------------------------------*/
function countChar(a,b){
    
    var count=0;
    
    for (var i=0; i<a.length;i++){
                
        if(a[i]==b){count++;}
    }
    
    return count;
}


console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
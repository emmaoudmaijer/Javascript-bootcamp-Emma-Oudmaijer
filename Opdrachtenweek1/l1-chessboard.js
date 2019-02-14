/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

let grid = 8;

var regel="";

for (var i = 1; i < grid+1; i++) {
    
    if( (i % 2)==0 ){
        regel="";
        for (var j = 1; j < grid+1; j++) {
            if(j % 2 == 0){
                regel += " ";
            } else{
                regel += "#";
            }
        }
    } 
    else{
        regel="";
        for (var j = 1; j < grid+1; j++) {
            if(j % 2 == 0){
                regel += "#";
            } else{
                regel += " ";
            }
        }
    }

    console.log(regel+"\n");
}
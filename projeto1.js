var prompt = require("prompt-sync")();


let cont = 0;
let a;
let b;
let c;
let d;
let e;


//var s = new Boolean(true);      // valor inicial true
//var n = new Boolean(false);         // valor inicial false




while(cont < 1){
    a = +prompt(`${cont+1} - Você salvou ... ? : `);
    b = +prompt(`${cont+2} - Você salvou ... ? : `);
    c = +prompt(`${cont+3} - Você salvou ... ? : `);
    d = +prompt(`${cont+4} - Você salvou ... ? : `);
    e = +prompt(`${cont+5} - Você salvou ... ? : `);
 
    if ( a + b + c + d + e == 0 ) {
     console.log("Você falha miseravelmente");

    } else if ( a + b + c + d + e == 1 ||  a + b + c + d + e == 2 ) {
     console.log(" Você falha, mas ainda consegue fugir da situação.");
    } else if ( a + b + c + d + e == 3 ) {
        console.log(" Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco");
    } else if ( a + b + c + d + e == 4) {
        console.log(" Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita");
    } else if (a + b + c + d + e >= 5) {
        console.log(" Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");

   }

 cont++
}







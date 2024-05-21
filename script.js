// let nombre="pedrito";
// let apellido="Suarez";
// let age=25;
// console.log(age +" "+nombre)

// let numberone=120;
// let numbertwo=20;
// let resultsuma = numberone + numbertwo;
// let resultresta = numberone - numbertwo;
// let resultmulti = numberone * numbertwo;
// let resultdivision = numberone / numbertwo;
// console.log("suma:",resultsuma);
// console.log("resta:",resultresta);
// console.log("multiplicacion:",resultmulti);
// console.log("division:",resultdivision);


// let nota = 9;
// if (nota <4) {
//     console.log("aplazado");
// } else if (nota <7) {
//     console.log("desaprobado");
// }else if (nota <9) {
//     console.log("aprobado")
// }else {
//     console.log ("sobresaliente")

// }

// let nombres =["diego", "anabel", "esteban"];
// console.log(nombres);
// console.log(nombres[0]);
// console.log(nombres[2]);
// console.log("cantidad de nombres;",nombres,length);
// for(let i = 0; i< nombres.length; i++){
// console.log(nombre[i])
// }

let topping = "oreo";
let precio = 0;
let preciofinal = 0;
let helado = 350;

if(topping=="oreo"){
    precio= 10;
} else if(topping =="kitkat"){
    precio=15;
} else if(topping=="kinder"){
    precio= 25;
} else{
    console.log("no tenemos este topping");
}

preciofinal = helado + precio;
console.log ("el helado cuesta $"+preciofinal);

let menu = "pescado"
switch (menu) {
    case"pescado":
    console.log ("vino blanco");
    break;
    case "carne":
        console.log ("vino tinto");
    case "verduras":
        console.log ("agua");
    break;
    default:
        console.log ("elija entre carne,verdura o pesado");

}

let names=["britney","justin","nick","brian"];
console.log (names);
console.log(names[0]);
console.log(names[2]);
names.push("robertito");

let nota = 9;
 if (nota <11) {
     console.log("el numero es mas chico que 11");
 }









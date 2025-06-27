// let age=21;
// // let price=18.99;
// let fullName="Bala";
// let age=21,student=false;
// document.getElementById("p1").textContent=`your name is ${fullName}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// console.log(`your age is ${age}`);
// console.log(typeof age)

// let name=window.prompt("what's your name");
// console.log(name)
// let un;
// document.getElementById("s").onclick=function(){
//     un=document.getElementById("t").value;
//     //console.log(un);
//     document.getElementById("h").textContent=`Welcome ${un}`
// }
// const pi=3.14;
// document.getElementById("s").onclick=function(){
//     radius=document.getElementById('t').value;
//     radius=Number(radius)
//     cir=2*pi*radius;
//     console.log(cir)
// }
const D=document.getElementById("d");
const I=document.getElementById("i");
const R=document.getElementById("r");
const C=document.getElementById("count");
let count=0;

D.onclick=function(){
    count--;
    C.textContent=count;
}
I.onclick=function(){
    count++;
    C.textContent=count;
}
R.onclick=function(){
    count = 0;
    C.textContent=count;
}
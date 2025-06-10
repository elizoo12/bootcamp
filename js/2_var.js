{
{
{
let num=1;
console.log(num);

let txt="holas buneas tardes"
console.log(txt);

let a=7;
let b=a;
console.log(b);
let tituloDeLaPelicula;
let camelCaseBienPuesto;
let edadDelMonstruo;

//mostrara un 3;

a=5; //a=5
b=7; //a=5 b=7
let c=a; 
a=b;  
b=c;  
console.log(a,b);
console.log("-------------")
}


const txt1="Este es el principio";
const txt2="Este es el final";
const txt3=txt1+" "+txt2;
console.log(txt3);

const euros=7;
const dolares= 2*euros;
console.log(dolares);

const precio=100;
const precioIva=precio*1.21;
console.log(precioIva);

const p=100;
const p_iva=p+p*(21/100);
console.log(p_iva);



let ancho=4;
let alto=3;
let area=ancho*alto;
console.log(area);


const celsius=20;
const farenheiht=celsius*(9/5)+32;
console.log(farenheiht);

const nombre= "eric";
const material="madera";
const dimension="diminuto";
const comentario="que sea bonita, pero de una belleza estraña, indómita";
console.log(`${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimension}. ${comentario}`);



if(10 == 11){
  console.log('You got a true!');
}else {
  console.log('You got a false!');
}

const nota=10;

if(nota>5){
  console.log("Aprobado")
}else if(nota==5){
  console.log("aprobado por los pelos");
}else{
  console.log("suspenso")
}


const n=10;

if(n>=0){
  console.log(n +" es positvo");
}else {
  console.log(n + ' es negativo');
}

if(n%2==0){
  console.log(n +' es par');
}else {
  console.log(n + ' es impar');
}

const op='*';
const n1=10;
const n2=3;


if(op=='+'){

  console.log(n1+n2);

}else if(op=='-'){

  console.log(n1-n2);

}else if(op=='*'){

  console.log(n1*n2);

}

let b=-4;
console.log(b>0? "positivo":"negativo")

let i=3;

console.log(i%2==0?"par":"impar")


let color="rojo";

switch(color){

  case "rojo":
    console.log("es rojo")
  break
  case "amarillo":
    console.log("es amarillo");
    break
  

}


for(let i=1;i<32;++i){

  if(i%15==0) console.log("fizzBuzz");
  else if(i%3==0) console.log("fizz");
  else if(i%5==0) console.log("buzz");
  else console.log(i);


}

}


let j=0;
let s=0;
let max=100;
while(j<=max){

  s+=j;
  ++j;
}
console.log(s);
console.log(max*(max+1)/2);

{


  let i=1;
  let f=1;
  do{

    f*=i;
    ++i;
  }while(i<=5)
    console.log(f);
}


function fibo(i){

  if(i==1 || i==2) return 1;
  else return fibo(i-1)+fibo(i-2);
}
console.log(fibo(10));

console.log(fibo(15));

function area(h,w){

    return h*w;
}

console.log(area(2,5));


function perimetro(radio){

  return 2*Math.PI*radio;
}
function area_circulo(radio){

  return Math.PI*radio*radio;

}

console.log(perimetro(3));
console.log(area_circulo(3));


let txt="3 km/hora 5";
let vel=Number(txt[0]);
console.log(vel)


function echo(par){
  return par;
}

function saludar(name){

  return `Hola ${name}`;
}
console.log(saludar("eric"));

function test(val) {
	if (val>=10 && val<=20) { // Cambia esta línea
		return "Inside";
	}else {
		return "Outside";
	}
}

function testEqual(val) {
	if (val==12) { // Cambia esta línea
		return "Equal";
	}
	return "Not Equal";
}

function testElse(val) {
	let result = "";
	if (val > 5) {
		result = "Mayor que 5";
	}else {
		result = "Menor o igual a 5";
	}
	return result;
}


function testElse(val) {
	let result = "";

	if (val > 5) {
		result = "Bigger than 5";
	} else if (val < 5) {
	result = "Smaller than 5";
	}else if (val == 5) {
		result = "Equal to 5";
	}
	return result;
}


function testSize(num) {
	
  let size;
  
  if(num<5) size="Tiny";
  else if(num<10) size="Small";
  else if(num<15) size="Medium";
  else if(num<20) size="Large";
  else size="Huge"
  return size; 
}


function nand(b1, b2){

  return !(b1 && b2);
}
console.log(nand(1,0))

function nor(b1, b2){

  return !(b1 || b2);
}

console.log(nor(0,0));

function xor(b1,b2){
  
  return (b1 && !b2) || (!b1 && b2);
}


function cout(n,cb){

  if(n>0){

      console.log(n);
      cb(n-1,cout);


  }


}

function cout2(n,cb){

  if(n>0){

    console.log(n);
    cb(n-1,cout2);
  }

}

cout(5,cout2);




function hacercosas(n1,n2){
  return n1+n2
}

const hacercosas2= (n1,n2)=>{return n1+n2}
console.log(hacercosas2(2,3));


const cubo=(n)=>{console.log(n*n*n)}

cubo(3);

}

const peri_circu=r=>2*Math.PI*r
console.log(peri_circu(3))
console.log(`a\nb\nc\n`)


const longi=name=>name.length

console.log(longi("ANA"));
let txt="ana";
console.log(txt[0]);
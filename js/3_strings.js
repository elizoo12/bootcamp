function devuelveEnesimaLetra(str){
  if(str.length>8) return str[8];
  else return false;
}

console.log(devuelveEnesimaLetra("abcdefghijklmn"));


function toCase(str){

    const palabra=str.toLowerCase()+"-"+str.toUpperCase();
    return palabra;
}

console.log(toCase("hola"));

function shortcut(s1,s2){
  const ini=s1[0]+s2[0];
  return ini;
}
console.log(shortcut("hola","adios"));

function firstChar(s){

  let i=0;
  while(i<s.length && s[i]==" "){
    ++i;
  }
  return s[i];
}
console.log(firstChar("   erasdasd"));

function devuelveMasLarga2(s1,s2,s3){

  if(s1.length>s2.length && s1.length>s3.length) return s1
  else if(s1.length<s2.length && s3.length<s2.length) return s2
  else if(s1.length<s3.length && s2.length<s3.length) return s3
  else return "no hay mas larga"

}


console.log(devuelveMasLarga2("a","bb","ccc"))

function tieneLetra(s1,char){
  return (s1.includes(char)|| s1.includes(char.toLowerCase()));

}
const s1="ABECEDARIO";
console.log(tieneLetra(s1,"b"));
console.log(s1);

function crearPalabra(char,n){

  let sol="";
  for(let i=0;i<n;i++){
    sol+=char;
  }
  return sol;
}

function crearPalabra2(char,n){
  char=char.toUpperCase();
  return char.repeat(n);

}


console.log(crearPalabra2("a",4));


function addGuiones(str){

  let s=str[0];
  for(let i=1;i<str.length;++i){
    s+="-"+str[i];
  }
  return s;
}

console.log(addGuiones("amor"))


function contadorDeLetras(str,char){

  let n=0;
  for(let i=0;i<str.length;++i){
    if(str[i]==char)++n;
  }
  return n;
}

console.log(contadorDeLetras("abcdederd","d"));

function contadorDeLetras2(str,char){
  str=str.toLowerCase();
  char=char.toLowerCase();
  let n=0;
  for(let i=0;i<str.length;++i){
    if(str[i]==char)++n;
  }
  return n;
}


console.log(contadorDeLetras2("abcDederd","d"));


function index(s1,s2){
  let equal=false;
  let j=0;
  for(let i=0; i<s2.length && !equal;++i){
    for(;j<s1.length;++j){
      if(s1[j]==s2[i]) equal=true;

    }


  }
  return --j;
}

console.log(index("bit","it"));



function firstWord(str){

  return str.substring(0,str.indexOf(' '));
}


console.log(firstWord("abc def ghi jkl"));


const url="https://pablomonteserin.com/curso/javascript/metodos-para-trabajo-con-cadenas/";

console.log(url[0]);


const url2="https://pablomonteserin.com/curso/javascript/metodos-para-trabajo-con-cadenaslmao";

function title(str){
  if(str[str.length-1]!='/'){
    return str.slice(str.lastIndexOf('/')+1,str.length);
  }
  else{
    str=str.slice(0,str.length-1);
    return str.slice(str.lastIndexOf('/')+1,str.length);
  }
}

console.log(title(url2));


const name='eric';

console.log(name[Math.floor(Math.random()*4)]);




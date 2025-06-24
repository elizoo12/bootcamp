const palabras=["alfabeto", "exprimir","javascript","Montesserin"];
const palabra=palabras[Math.floor(Math.random()*4)];
let palabraOculta="";
for(let i=0;i<palabra.length;++i){
  palabraOculta+="-";
}

function rehacerPalabraOculta(palabra,palabraOculta,letra){
  
  let copia="";
  for(let i=0;i<palabra.length;++i){
    if(palabra[i].toLowerCase()==letra){
      copia+=palabra[i];
    }else{
      copia+=palabraOculta[i];
    }
  }
  return copia;
}



alert("adivina la palabra: "+palabraOculta+"   "+palabra);
while(palabraOculta!=palabra){
  const letra=prompt("adivina una letra de la palabra: "+palabraOculta).toLowerCase();
  if(letra.length!=1){
    alert("ESCRIBE SOLO UNA LETRA")
    continue;
  }
  palabraOculta=rehacerPalabraOculta(palabra,palabraOculta,letra);
}

alert("lo has adivinado!! ");
function potencia(n,p){
  if(p==1){
    return n;
  }else{
    let aux;
    if(p%2==0){
      aux=potencia(n,p/2);
      return aux*aux;
    }else{
      aux=potencia(n,Math.floor(p/2));
      return n*aux*aux;
    }
  }
}

console.log(potencia(2,10));

function pow(n,p){

  let res=n;
  let i=1;
  while(i<p){
    if(i*i<p){
      res=res*res;
      i*=2;
    }else{
      res*=n;
      ++i;
    }
  }
  return res;
}

console.log(pow(3,6));

const a="12345";


const cosas=[1,2,3,4,5];
const nums=[...cosas];
console.log(nums);






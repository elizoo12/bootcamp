{
const names=["eric","joel","pau","alberto","theo"];

for(let i=0;i<names.length;++i){
  console.log(`Conozco a alguien llamado ${names[i]}`);
}
}
function toArray(arr0,arr1){

  return [arr0,arr1];
}

console.log(toArray(1,2));

{
const numbers = [1,9,3,8,5,7];
for(n in numbers){
  console.log(2*numbers[n]);
}

for(n of numbers){
  console.log(2*n);
}

}



{

function getFirstElement(arr){
  if(Array.isArray(arr)) return arr[0];
  return null;
}
console.log(getFirstElement([1,2,3]))
console.log(getFirstElement(true))
}

{
  function setFirstArray(arr,element){
    const copy=[...arr];
    copy[0]=element;
    return copy;
  }

  let arr=[1,2,3,4];
  console.log(arr)
  console.log(setFirstArray(arr,5));
  console.log(arr);
  

}

{

  const arr=[1,9,-3,8,-5,0,3,4,6,-7];
  let sumPos=0;
  let nPos=0;
  let sumNeg=0;
  let nNeg=0;

  for(n of arr){
    if(n>0){
      sumPos+=n;
      ++nPos;
    }else if(n<0){
      sumNeg+=n;
      ++nNeg;
    }
  }
  console.log(` la media de los positivos es ${sumPos/nPos} y la media de los negativos es ${sumNeg/nNeg}`)

}


{
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12], 13, 14];
  const myData = arr[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
  console.log(myData);



}


{
  const names=["eric","pablo", "jorge", "omar","rene"]

  names.forEach((name)=>{
    console.log(`conozco a alguien llamado ${name}`);
  })

}


{
  const nums=[1,9,3,8,5,7];
  nums.forEach((n)=>{
    console.log(2*n)
  })
}

{
  const nums=[1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
  let pos=0, neg=0, neu=0;

  nums.forEach((n)=>{
    if(n>0)++pos;
    else if(n==0) ++neu;
    else ++neg;
  })
  console.log([pos,neg,neu]);

}

{
  const nums=[1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
  let nPos=nNeg=sumPos=sumNeg=0;
  
  nums.forEach((n)=>{
    if(n>0){
      ++nPos;
      sumPos+=n;
    }else if(n<0){
      ++nNeg;
      sumNeg+=n;

    }
  })
  console.log([sumPos/nPos,sumNeg/nNeg]);
}
let desiredRow=9;
let desiredCol=9;
let actualRow=9;
let actualCol=9;
let nBombs=10;
let started=false;
const inputRow=document.querySelector('#inputRows');
const inputCol=document.querySelector('#inputCols');
const showRows=document.querySelector('#showRows');
const showCols=document.querySelector('#showCols');
let publicBoard;
let privateBoard;


//utility, copia profunda de arrays
function copyArray(items){
  return items.map((item)=>(Array.isArray(item)?copyArray(item):item))
}
function printBoard(board){

  
  let str="";
  for(let i=0;i<board.length-1;++i){

    str=str+String(board[i][0]);
    for(let j=1;j<board[0].length;++j){
      str=str+"|"+String(board[i][j]);

    }
    str+="\n-"
    for(let j=1;j<board[0].length;++j){
      str=str+"+-";

    }
    str+="\n";

  }

  str=str+String(board[board.length-1][0]);
  for(let j=1;j<board[0].length;++j){
    str=str+"|"+String(board[board.length-1][j]);

  }

  str+="\n\n";

  console.log(str);


}




// crea el tablero del DOM
function createBoard(nRow,nCol){


    nRow=showRows.innerText;
    nCol=showCols.innerText;
    
    const board=document.querySelector('.board');
    board.innerHTML = '';
    board.style.display="grid";
    board.style.gridTemplateColumns=`repeat(${nCol},1fr)`;
    board.style.gridTemplateRows=`repeat(${nRow},1fr)`;


  for (let i = 0; i < nRow; i++) {
    for (let j = 0; j < nCol; j++) {
      const casilla = document.createElement('div');
      casilla.classList.add('casilla');
      casilla.classList.add('unknow');
      casilla.dataset.row = i;
      casilla.dataset.col = j;
      casilla.style.aspectRatio=1; 

      board.appendChild(casilla);
    }
  }


}


//pendiente de desarrollar
function resetBoard(){

  document.querySelectorAll('.casilla').forEach((casilla)=>{

    //posiblemente detectare el estado de las casillas con clases, aqui deberia aprender a quitar todas las clases de todas las casillas dejando solo la clase casilla

  })
  //el tablero tambien deberemos representarlo en una matriz osea que tocaria resetear tambien el array.

}

function makeNewMap(rows,cols,nBombs, iniX,iniY){

  
  const arr=Array(rows).fill(0).map(()=>Array(cols).fill(0));

  //-1 significara que hay una bomba.

  let aux;
  for(let bomba=0; bomba<nBombs;++bomba){
    
    
    aux=Math.floor(Math.random()*rows*cols);
    let coorX=Math.floor(aux/cols);
    let coorY=Math.floor(aux%cols);
    while(arr[coorX][coorY]==-1 && coorX!=iniX && coorY!=iniY){
      aux=Math.floor(Math.random()*rows*cols);
      coorX=Math.floor(aux/cols);
      coorY=Math.floor(aux%cols);

    }



    arr[coorX][coorY]=-1;

    for(let i=-1;i<2;++i){
      for(let j=-1; j<2;++j){
        if(coorX+i>=0 && coorX+i<rows && coorY+j>=0 && coorY+j<cols && arr[coorX+i][coorY+j]!=-1){
          arr[coorX+i][coorY+j]+=1;
        }
      }
    }
  }
  return arr;
}

function revealCasilla(coorX,coorY,privateBoard,publicBoard){

  if(privateBoard[coorX][coorY]==-1){
    //el jugador pierde PENDIENTE
    console.log("el fin de partida no está implementado");
  }else if(privateBoard[coorX][coorY]==0){
    publicBoard[coorX][coorY]=0;
    console.log("entra al cero");
    for(let i=-1;i<2;++i){
      for(let j=-1; j<2;++j){
        if(coorX+i>=0 && coorX+i<publicBoard.length && coorY+j>=0 && coorY+j<publicBoard[0].length && publicBoard[coorX+i][coorY+j]=='?'){
          revealCasilla(coorX+i,coorY+j,privateBoard,publicBoard);
        }
      }
    }

  }else{
    publicBoard[coorX][coorY]=privateBoard[coorX][coorY];
  }

}


//evento reiniciar partida
document.querySelector('.reset').addEventListener('click',()=>resetBoard());


//evento redimensionar tablero
document.querySelector('#resizeBoard').addEventListener('click',()=>{


  if(started ){

    const borrar= confirm("si redimensionas el tablero se reiniciara la partida, ¿estas seguro?")

    if(borrar &&  (desiredCol!=actualCol || desiredRow!= actualRow)){
      actualCol=desiredCol;
      actualRow=desiredRow;
      createBoard(desiredRow,desiredCol);
      makeBoxesListen();
    }else if(borrar){
      resetBoard();
    }

  }else{

    if(desiredCol!=actualCol || desiredRow!= actualRow){
      actualCol=desiredCol;
      actualRow=desiredRow;
      createBoard(desiredRow,desiredCol);
      makeBoxesListen();
    }


  }



})

//evento leer filas
document.querySelector('#inputRows').addEventListener('input',(e)=>{
  showRows.innerText=e.target.value;
  desiredRow=parseInt(e.target.value);
})

//evento leer columnas
document.querySelector('#inputCols').addEventListener('input',(e)=>{
  showCols.innerText=e.target.value;
  desiredCol=parseInt(e.target.value);
})



function makeBoxesListen(){
document.querySelectorAll('.casilla').forEach((casilla)=>{
  casilla.addEventListener('click',(e)=>{
    console.log("escuchaaaaa");
    console.log(casilla.dataset.row,"   ",casilla.dataset.col);
    if(!started){
      started=true;

      publicBoard=Array.from({length:actualRow},()=>Array(actualCol).fill('?'));
      privateBoard=makeNewMap(actualRow,actualCol,nBombs,parseInt(casilla.dataset.row),parseInt(casilla.dataset.col));
      printBoard(privateBoard);
    }
    revealCasilla(parseInt(casilla.dataset.row),parseInt(casilla.dataset.col),privateBoard,publicBoard);
    printBoard(publicBoard);

  })})
}




































createBoard(desiredRow,desiredCol);
makeBoxesListen();
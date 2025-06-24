let board= Array(3).fill().map(()=>Array(3).fill('?'));
console.log(board);
let finish=false;
let player='X';

function boardToStr(board){

  let res="";
  res+=`${board[0][0]}  `;
  for(let j=1;j<board[0].length;++j){
    res+=`|  ${board[0][j]}  `;
  }

  res+="    1  | 2 | 3   Index";

  for(let i=1;i<board.length;++i){
    res+="\n--+--+--      --+--+--\n";

    res+=`${board[i][0]}  `;
    for(let j=1;j<board[i].length;++j){
      res+=`|  ${board[i][j]}  `;
    }
    
    res+=`   ${i*3+1}  |  ${i*3+2} |  ${i*3+3}`


  }
  
  return res;
}

function hayGanador(board,p){

  let res=false;
  
  for(let i=0; i<3 && !res;++i){
    res=(board[i][0]==p && board[i][1]==p && board[i][2]==p);

    res=(res||(board[0][i]==p && board[1][i]==p && board[2][i]==p));
  }
  res=(res||(board[0][0]==p && board[1][1]==p && board[2][2]==p)||(board[2][0]==p && board[1][1]==p && board[0][2]==p));

  return res;
}


function boardFull(board){

  let res=true;

  for(let i=0;i<3 &&res;++i){
    for(let j=0;j<3 &&res;++j){
      res=('?'!==board[i][j]);
    }
  }
  return res;
}

let seguir_jugando=true;
while(seguir_jugando){

  while(!finish){

    let move=prompt(`${player} elige una posicion del 1 a la 9\n`+boardToStr(board));

    if(move==""){
      alert("escribe algo!");
    }

    
    if(isNaN(move)){
      alert("eso no es un numero");
      continue;
    }
    if(Number.isInteger(move)){
      alert("solo se admiten numeros enteros del 1 al 9");
      continue;
    }
    move=parseInt(move)-1;
    if(move<0 || move>8){
      alert("posicion no valida");
      continue;
    }
  
    if(board[Math.floor(move/3)][move%3]==='?'){
      board[Math.floor(move/3)][move%3]=player;
    }else{
      alert("Posicion ocupada, buscate otra")
      continue;
    }
  
  
  
    if(hayGanador(board,player)){
      alert(`${player} ha ganado la partida`)
      finish=true;
    }
    if(boardFull(board)){
      alert("ha habido un empate");
      finish=true;
    }
  
    if(player=='X')player='O';
    else player='X';
  }

  seguir_jugando=confirm("quieres jugar otra?");
  finish=false;
  board= Array(3).fill().map(()=>Array(3).fill('?'))
  player='X'
}

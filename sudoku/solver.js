const ejemplo=[
  [1,2,3,4,5,6,7,8,9],
  [2,3,4,5,6,7,8,9,1],
  [3,4,5,6,7,8,9,1,2],
  [4,5,6,7,8,9,1,2,3],
  [5,6,7,8,9,1,2,3,4],
  [6,7,8,9,1,2,3,4,5],
  [7,8,9,1,2,3,4,5,6],
  [8,9,1,2,3,4,5,6,7],
  [9,1,2,3,4,5,6,7,8]
]

const s1=[
  [0,0,0,0,0,2,3,0,7],
  [0,0,0,0,0,6,4,5,0],
  [1,0,0,9,3,0,0,0,0],
  [0,0,0,0,6,1,8,0,0],
  [0,4,8,0,0,0,5,6,0],
  [0,0,6,4,2,0,0,0,0],
  [0,0,0,0,7,5,0,0,8],
  [0,2,9,1,0,0,0,0,0],
  [4,0,5,6,0,0,0,0,0]
]

const s2=[
  [7,0,0,0,0,2,0,0,4],
  [1,0,0,0,0,0,7,6,0],
  [2,0,0,0,8,0,3,0,9],
  [0,0,0,6,5,0,8,2,0],
  [0,0,0,0,2,0,0,0,0],
  [0,2,6,0,9,1,0,0,0],
  [8,0,7,0,1,0,0,0,5],
  [0,5,9,0,0,0,0,0,3],
  [3,0,0,5,0,0,0,0,8]

]

function print_sudo(sudo){

  let str="";
  for(let i=0;i<8;++i){

    str=str+String(sudo[i][0]);
    for(let j=1;j<9;++j){
      str=str+"|"+String(sudo[i][j]);

    }
    str=str+"\n-+-+-+-+-+-+-+-+-\n";

  }

  str=str+String(sudo[8][0]);
  for(let j=1;j<9;++j){
    str=str+"|"+String(sudo[8][j]);

  }

  console.log(str);
}

function fillOut(i,j,sudo,b,inCol,inRow,inSquare){

  if(i===8 && j>8){
    print_sudo(sudo);
    return true;
  }else{

    if(j>8){
      j=0;
      ++i;
    }

    if(b[i][j]){
      return fillOut(i,j+1,sudo,b,inCol,inRow,inSquare);
    }else{

      for(let k=1;k<=9;++k){

        if(!inRow[i][k] && !inCol[j][k] && !inSquare[Math.floor(i/3)][Math.floor(j/3)][k]){

          inRow[i][k]=true;
          inCol[j][k]=true;
          inSquare[Math.floor(i/3)][Math.floor(j/3)][k]=true;
          sudo[i][j]=k;

          if(fillOut(i,j+1,sudo,b,inCol,inRow,inSquare)) return true;

          inRow[i][k]=false;
          inCol[j][k]=false;
          inSquare[Math.floor(i/3)][Math.floor(j/3)][k]=false;
          sudo[i][j]=0;
        }
      }
    }
  } 
  return false;
}

function solve_sudo(sudo){
  const inCol = Array.from({ length: 9 }, () => Array(10).fill(false));
  const inRow = Array.from({ length: 9 }, () => Array(10).fill(false));
  const inSquare = Array.from({ length: 3 }, () =>Array.from({ length: 3 }, () => Array(10).fill(false)));
  const boolean = Array.from({ length: 9 }, () => Array(9).fill(false));
  let valid=true;
  for(let i=0;i<9;++i){
    for(let j=0;j<9 && valid;++j){
      if(sudo[i][j]!=0){
        inRow[i][sudo[i][j]]?valid=false:inRow[i][sudo[i][j]]=true;
        inCol[j][sudo[i][j]]?valid=false:inCol[j][sudo[i][j]]=true;
        inSquare[Math.floor(i/3)][Math.floor(j/3)][sudo[i][j]]?valid=false:inSquare[Math.floor(i/3)][Math.floor(j/3)][sudo[i][j]]=true;
        boolean[i][j]=(sudo[i][j]!=0);
      }


    }
  }
  console.log(valid);
  if(!valid) return false;
  return fillOut(0,0,sudo,boolean,inCol,inRow,inSquare);


}



const switcher = document.querySelector('.darkMode');
const sudos=document.querySelectorAll('.sudo');
const solver=document.querySelector('.boton');

document.querySelectorAll('.solve .casilla').forEach(casilla => {
  casilla.addEventListener('paste', e => e.preventDefault());
  casilla.addEventListener('keydown', e => {
    const key = e.key;

    if (key>'0' && key<='9') {
      casilla.innerText = key;

      e.preventDefault();
    } else if (key === 'Backspace' || key === 'Delete') {
      casilla.innerText = '';
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  });
});


document.querySelectorAll('.solve .cuadrado').forEach((cuadrado, qIndex) => {
  const casillas = cuadrado.querySelectorAll('.casilla');

  casillas.forEach((casilla, i) => {
    const row = Math.floor(qIndex / 3) * 3 + Math.floor(i / 3);
    const col = (qIndex % 3) * 3 + (i % 3);

    casilla.dataset.row = row;
    casilla.dataset.col = col;


  });
});
document.querySelectorAll('.solution .cuadrado').forEach((cuadrado, qIndex) => {
  const casillas = cuadrado.querySelectorAll('.casilla');

  casillas.forEach((casilla, i) => {
    const row = Math.floor(qIndex / 3) * 3 + Math.floor(i / 3);
    const col = (qIndex % 3) * 3 + (i % 3);

    casilla.dataset.row = row;
    casilla.dataset.col = col;

  });
});

document.addEventListener('keydown', (e) => {
  const focused = document.activeElement;
  if (!focused.classList.contains('casilla')) return;

  let row = parseInt(focused.dataset.row);
  let col = parseInt(focused.dataset.col);
  console.log(e.key);
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      row--; break;
    case 'ArrowDown':
    case 's':
      row++; break;
    case 'ArrowLeft':
    case 'a':
      col--; break;
    case 'ArrowRight':
    case 'd':
      col++; break;
    case 'Enter':
      const enterSudo=Array.from({length:9},()=>Array(9).fill(0));
      read_sudo(enterSudo);
      if(solve_sudo(enterSudo)){
        show_sudo(enterSudo);  
      }else{
      window.alert("no solution");
      document.querySelectorAll('.solution .casilla').forEach(casilla=>{
        casilla.innerText="";
      });
      }
      break; 
    default:
      return; 
  }

  if(row===-1) row=8;
  if(row===9) row=0;
  if(col===-1) col=8;
  if(col===9) col=0;

  const selector = `.casilla[data-row="${row}"][data-col="${col}"]`;
  const next = document.querySelector(selector);

  // e.preventDefault(); // evita scroll de flechas
  next.focus();

});

switcher.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  sudos.forEach(sudoku => {
    sudoku.classList.toggle('dark');
  });
  solver.classList.toggle('dark');

  // Cambia el texto del botón
  if (document.body.classList.contains('dark')) {
    switcher.textContent = 'Modo claro';
  } else {
    switcher.textContent = 'Modo oscuro';
  }
});





function read_sudo(sudo){
document.querySelectorAll('.solve .casilla').forEach(casilla => {
  const row = parseInt(casilla.dataset.row);
  const col = parseInt(casilla.dataset.col);
  const value = parseInt(casilla.innerText.trim());

  // Solo guardar si es un número válido del 1 al 9
  if (!isNaN(value)) {
    sudo[row][col] = value;
  }
});
}

function show_sudo(sudo){
  document.querySelectorAll('.solution .casilla').forEach(casilla=>{

    const row = parseInt(casilla.dataset.row);
    const col = parseInt(casilla.dataset.col);
    casilla.innerText=String(sudo[row][col]);

  });

}




document.querySelector('.boton').addEventListener('click', () => {
  const sudoku=Array.from({length:9},()=>Array(9).fill(0));
  read_sudo(sudoku);
  if(solve_sudo(sudoku)){
  show_sudo(sudoku);
  }else{
    window.alert("no solution");
    document.querySelectorAll('.solution .casilla').forEach(casilla=>{
      casilla.innerText="";
    });

  }
});


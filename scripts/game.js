// Variáveis inicias
let board = ['','','','','','','','',''];
let playerTime = 0;
let gameOver = false;

let symbols = ['o', 'x'];
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Esta função acrescendo o símbolo no board, chama a função gameOver e troca a vez do jogador
function handleMove(position) {
    
    if (gameOver){
        return;
    }

    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(gameOver == false){
            if(playerTime == 0){
                playerTime = 1;
                }
            else{
                playerTime = 0;
                }
            }
        }
    return gameOver;
}

//Esta função analisa se houve um ganhador, muda a cor dos squares referentes ao ganho e retorna True para o gameOver
function isWin(){

    for(let i=0; i<winStates.length; i++){
        let sequence = winStates[i];

        let pos1 = sequence[0];
        let pos2 = sequence[1];
        let pos3 = sequence[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){

            let square1 = document.getElementById(pos1.toString());
            square1.style.backgroundColor = "green";

            let square2 = document.getElementById(pos2.toString());
            square2.style.backgroundColor = "green";

            let square3 = document.getElementById(pos3.toString());
            square3.style.backgroundColor = "green";

            return true;
        }
        
    }
    return false;
}
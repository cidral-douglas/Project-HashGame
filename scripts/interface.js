//Aqui está a pontuação do jogo
let player0 = document.getElementById("player0");
let count0 = 0;
player0.innerHTML += " "+count0;

let player1 = document.getElementById("player1");
let count1 = 0;
player1.innerHTML += " "+count1;

//Quando o documento for carregado(DOMContentLoaded) ele irá executar a função abaixo
document.addEventListener('DOMContentLoaded', () => {

    //Todos os elementos da classe square estão agora dentro da variável squares
    let squares = document.querySelectorAll(".square");

    //Para cada square foi atribuído a função handleClick
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})


//Esta função adiciona um ponto ao ganhador e chama a função de updateSquare
function handleClick(event){
    //Target é o elemento que sofreu o evento

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {alert("O Jogo Acabou! - Player "+playerTime+" Venceu!");}, 10);
        if(playerTime == 0){
            count0 ++;
            player0.innerHTML = "Player 0: "+count0;
        }
        else{
            count1 ++;
            player1.innerHTML = "Player 1: "+count1;
        }
    };
    updateSquare(position);
    
}

//Esta função acrescenta o símbolo ao HTML
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    if(symbol != ''){
         square.innerHTML = `<div class= '${symbol}'></div>`
    }
    
}

//Esta função volta tudo pro estado inicial e chama a função resetSquares
function resetGame(){
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;
    resetSquares();
}

//Esta função faz um updateScreen, voltando o HTML para o estado original
function resetSquares(){

    let squares = document.querySelectorAll(".square");
    

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

            square.innerHTML = `<div class= '${symbol}'></div>`
            square.style.backgroundColor = "beige";
        
    })
}

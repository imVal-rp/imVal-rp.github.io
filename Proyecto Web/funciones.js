// Matriz que representa el laberinto
const laberinto = [
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
];
// Expandiendo dinámica hasta



// referencia al canvas
const canvas = document.getElementById('laberintoCanvas');
const ctx = canvas.getContext('2d');


// Tamaño de cada celda en píxeles ancho y alto
const cellWidth = 30;
const cellHeight = 30;


// Colores para cada tipo de celda
const colores = {
    0: '#C9E6F0',
    1: '#8B5DFF',
    jugador: '#640D5F'
};

//objetos Image
const imgJugador = new Image();
imgJugador.src = '../images/jugadorA.png';

const imgObstaculo = new Image();
imgObstaculo.src = '../images/gatitoC.png';

const imgPared = new Image();
imgPared.src = '../images/obs.png';

const imgTrofeo = new Image();
imgTrofeo.src = '../images/premioT.png'; // Cambia 'trofeo.png' por el nombre de tu archivo



// Encontrar una posición inicial válida (cualquier celda con valor 0)
function obtener_posicion_inicial() {
    for (let row = 0; row < laberinto.length; row++) {
        for (let col = 0; col < laberinto[row].length; col++) {
            if (laberinto[row][col] === 0) {
                //posición detectada
                return { row, col };
            }
        }
    }
    // regresa la esquina superior izquierda si no hay alguna posición donde hay un 0
    return { row: 0, col: 0 };
}

function obtener_posicion_random() {
    const posiciones_validas = [];

    // Recorrer el laberinto para encontrar todas las celdas con valor 0
    for (let row = 0; row < laberinto.length; row++) {
        for (let col = 0; col < laberinto[row].length; col++) {
            if (laberinto[row][col] === 0) {
                posiciones_validas.push({ row, col });
            }
        }
    }

    // Elegir una posición aleatoria de las válidas
    if (posiciones_validas.length > 0) {
        const indice_random = Math.floor(Math.random() * posiciones_validas.length);
        return posiciones_validas[indice_random];
    }

    // Si no hay posiciones válidas, devolver la esquina superior izquierda
    return { row: 0, col: 0 };
}

// Obstáculos móviles
const obstaculos = [
    { row: 15, col: 5, direccion: 'right' },
    { row: 22, col: 17, direccion: 'left' },
    { row: 17, col: 16, direccion: 'down' },
    { row: 13, col: 14, direccion: 'down' },
    { row: 10, col: 23, direccion: 'down' },
    { row: 25, col: 0, direccion: 'right' },
    { row: 4, col: 0, direccion: 'right' }
];

// Color para los obstáculos móviles
colores.obstaculo = '#FF4E50';
let juego_terminado = false; // Variable para controlar el estado del juego
let juegoEnPausa=false
let intervalo_obstaculos; // Referencia al intervalo de movimiento de obstáculos
// Función para mover obstáculos
function mover_obstaculos() {
    if(juego_terminado || juegoEnPausa) return;
    for (let obstaculo of obstaculos) {
        let { row, col, direccion } = obstaculo;

        // Lógica de movimiento
        if (direccion === 'up') {
            if (row > 0 && laberinto[row - 1][col] === 0) obstaculo.row--;
            else obstaculo.direccion = 'down';
        } else if (direccion === 'down') {
            if (row < laberinto.length - 1 && laberinto[row + 1][col] === 0) obstaculo.row++;
            else obstaculo.direccion = 'up';
        } else if (direccion === 'left') {
            if (col > 0 && laberinto[row][col - 1] === 0) obstaculo.col--;
            else obstaculo.direccion = 'right';
        } else if (direccion === 'right') {
            if (col < laberinto[0].length - 1 && laberinto[row][col + 1] === 0) obstaculo.col++;
            else obstaculo.direccion = 'left';
        }

        // Comprobar colisión con el jugador
        if (obstaculo.row === pos_jugador.row && obstaculo.col === pos_jugador.col) {
            juego_terminado = true;
            console.log("¡Has perdido! Un obstáculo te atrapó.");
            clearInterval(intervalo_obstaculos);
            return;
        }
    }
}




pos_trofeo = obtener_posicion_random();
pos_jugador = obtener_posicion_inicial();
console.log(pos_jugador);
console.log(pos_trofeo);


        
// Dibujar el laberinto
function dibujar_laberinto3() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < laberinto.length; row++) {
        for (let col = 0; col < laberinto[row].length; col++) {
            const valor_en_celda = laberinto[row][col];
            const x = col * cellWidth;
            const y = row * cellHeight;


            // Dibujar la celda
            // ctx.fillStyle = colores[valor_en_celda];
            // ctx.fillRect(x, y, cellWidth, cellHeight);
             // Dibujar el fondo (celdas vacías)
             if (laberinto[row][col] === 0) {
                ctx.fillStyle = colores[0];
                ctx.fillRect(x, y, cellWidth, cellHeight);
            }

            // Dibujar paredes (valor 1)
            if (laberinto[row][col] === 1) {
                ctx.drawImage(imgPared, x, y, cellWidth, cellHeight);
            }

            // Dibujar bordes
            // ctx.strokeStyle = '#000';
            // ctx.strokeRect(x, y, cellWidth, cellHeight);
        }
    }

    // Dibujar la posición del jugador después de mostrar el laberinto
    const { row, col } = pos_jugador;
    // console.log(pos_jugador);
    // console.log(pos_trofeo);
    const x = col * cellWidth;
    const y = row * cellHeight;
    // ctx.fillStyle = colores.jugador;
    // ctx.fillRect(x, y, cellWidth, cellHeight);
    ctx.drawImage(imgJugador, x, y, cellWidth, cellHeight);


    // Dibujar la posición del trofeo
    if (pos_trofeo) {
        const { row: trofeoRow, col: trofeoCol } = pos_trofeo;
        const xTrofeo = trofeoCol * cellWidth;
        const yTrofeo = trofeoRow * cellHeight;

        ctx.drawImage(imgTrofeo, xTrofeo, yTrofeo, cellWidth, cellHeight);

          // Representar el trofeo como un círculo dorado
        // ctx.fillStyle = 'gold';
        // ctx.beginPath();
        // ctx.arc(
        //     xTrofeo + cellWidth / 2, // Posición x del centro del círculo
        //     yTrofeo + cellHeight / 2, // Posición y del centro del círculo
        //     cellWidth / 3, // Radio del círculo
        //     0,
        //     2 * Math.PI
        // );
        // ctx.fill();
    }

    // Dibujar los obstáculos
    for (let obstaculo of obstaculos) {
        const xObst = obstaculo.col * cellWidth;
        const yObst = obstaculo.row * cellHeight;
        // ctx.fillStyle = colores.obstaculo;
        // ctx.fillRect(xObst, yObst, cellWidth, cellHeight);
        ctx.drawImage(imgObstaculo, xObst, yObst, cellWidth, cellHeight);

    }
}

// Mover obstáculos periódicamente
setInterval(() => {
    if (!juego_terminado) {
        mover_obstaculos();
        dibujar_laberinto3();
    }
}, 600); 


function win(){
    if (pos_jugador.row==pos_trofeo.row && pos_jugador.col==pos_trofeo.col){
        juego_terminado=true;
        console.log("Has ganado");
    }
}


// Agregar un evento global para detectar la tecla presionada
document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
});
// Agregar un evento global para detectar la tecla presionada
document.addEventListener("keyup", (event) => {
    console.log(`Tecla liberada: ${event.key}`);
});


// Escuchar eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') mover_jugador('up');
    else if (event.key === 'ArrowDown') mover_jugador('down');
    else if (event.key === 'ArrowLeft') mover_jugador('left');
    else if (event.key === 'ArrowRight') mover_jugador('right');
});

// Función para pausar el juego
function pause() {
    juegoEnPausa = true // Alternar el estado de pausa

    console.log("Juego pausado");
    clearInterval(intervalo_obstaculos); // Detener los obstáculos
}

// Función para reanudar el juego
function resume() {
    juego_terminado = false;
    juegoEnPausa=false;
    console.log("Juego reanudado");
    intervalo_obstaculos;
}

// Función para reiniciar el juego
function restart() {
    juego_terminado = false; // Despausar por si estaba en pausa
    pos_jugador = obtener_posicion_inicial(); // Restablecer la posición del jugador al inicio
    pos_trofeo=obtener_posicion_random();
    console.log("Juego reiniciado");
    // Obstáculos móviles
    const obstaculos = [
        { row: 15, col: 5, direccion: 'right' },
        { row: 22, col: 17, direccion: 'left' },
        { row: 17, col: 16, direccion: 'down' },
        { row: 13, col: 14, direccion: 'down' },
        { row: 10, col: 23, direccion: 'down' },
        { row: 25, col: 0, direccion: 'right' },
        { row: 4, col: 0, direccion: 'right' }
    ];
    // Limpiar y reiniciar el intervalo
    clearInterval(intervalo_obstaculos);
    intervalo_obstaculos;
    dibujar_laberinto3(); // Redibujar el laberinto
}

// Modificar la función mover_jugador para respetar la pausa
function mover_jugador(direction) {
    if (juegoEnPausa || juego_terminado) return; // No mover si el juego está en pausa

    const { row, col } = pos_jugador;
    let newRow = pos_jugador.row;
    let newCol = pos_jugador.col;

    // Calcular nueva posición
    if (direction === 'up' && pos_jugador.row>0) newRow--;
    else if (direction === 'down'  && pos_jugador.row < laberinto.length) newRow++;
    else if (direction === 'left' && pos_jugador.col>0) newCol--;
    else if (direction === 'right'  && pos_jugador.col < laberinto.length) newCol++;

    if(laberinto[newRow][newCol]!==1){
        pos_jugador={row : newRow, col: newCol}
        dibujar_laberinto3();
        win();
    }
    // Redibujar el laberinto
    dibujar_laberinto3();
}


dibujar_laberinto3();

const filas = 8;
const columnas = 8;

const tablero = [];

for (let i = 0; i < filas; i++) {
    tablero[i] = [];
      //console.log(tablero[i]) 
    for (let j = 0; j < columnas; j++) {
       if ((i + j) % 2 === 0) {
        tablero[i][j] = 'rojo'
       }else{
        tablero[i][j] = 'azul'
       }}
    }
    for (let i = 0; i < filas; i++) {
       console.log(tablero[i])
        
    }
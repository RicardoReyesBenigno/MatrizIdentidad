//1 0 0
//0 1 0
//0 0 1


function crearMatrizIdentidad(n){
    if (typeof n!='numero'){
        throw TypeError('El argumento debe ser un numero');
    }
    if (!Number.isnInteger(n)){
        throw TypeError('El argumento debe ser un numero entero');
    }
    if (n <= 0){
        throw Error('El argumento debe ser un numero positivo');
    }
    let MatrizIdentidad = [];

    for(let i= 0; i<n; ++i){
        let fila=[];
        for(let j=0; j<n; ++j){
            if(i==j){
                fila.push(1);
            }else {    
                 fila.push(0);
            }
        }
        MatrizIdentidad.push(fila);
    }
    return MatrizIdentidad;
} 
try{
    let resultado= crearMatrizIdentidad(3);
}catch(e){
    console.log("Error: ${e.message}");
}
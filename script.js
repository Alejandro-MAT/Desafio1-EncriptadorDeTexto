// a-ai, e-enter, i-imes, o-ober, u-Ufat

function obtenerMensajeEnPalabras(){
    let mensajeCompleto = document.getElementById('mensaje').value;
    return mensajeCompleto.split(' ');
}

function separarPalabraEnLetras(){
    let mensajeSeparado = obtenerMensajeEnPalabras();
    let palabrasEnLetras=[];
    for (let i = 0; i < mensajeSeparado.length; i++) {
        palabrasEnLetras[i]= mensajeSeparado[i].split('');
    }
    return palabrasEnLetras;
}

function encriptarPorVocales(){
    let palabrasSeparadas = separarPalabraEnLetras();
    for (let i = 0; i < palabrasSeparadas.length; i++) {
        for (let j = 0; j < palabrasSeparadas[i].length; j++) {
            if (palabrasSeparadas[i][j]=='a') {
                palabrasSeparadas[i][j]='ai';
            }else if(palabrasSeparadas[i][j]=='e'){
                palabrasSeparadas[i][j]='enter';
            }else if(palabrasSeparadas[i][j]=='i'){
                palabrasSeparadas[i][j]='imes';
            }else if(palabrasSeparadas[i][j]=='o'){
                palabrasSeparadas[i][j]='ober';
            }else if(palabrasSeparadas[i][j]=='u'){
                palabrasSeparadas[i][j]='ufat'
            }
        }
    }
    return palabrasSeparadas;
}
// a-ai, e-enter, i-imes, o-ober, u-Ufat
function desencriptarPorVocales() {
    let palabrasSeparadas = separarPalabraEnLetras();
    for (let i = 0; i < palabrasSeparadas.length; i++) {
        for (let j = 0; j < palabrasSeparadas[i].length; j++) {
            if (palabrasSeparadas[i][j]=='a') {
                palabrasSeparadas[i][j+1]='';
            }else if(palabrasSeparadas[i][j]=='e'){
                palabrasSeparadas[i][j+1]='';
                palabrasSeparadas[i][j+2]='';
                palabrasSeparadas[i][j+3]='';
                palabrasSeparadas[i][j+4]='';
            }else if(palabrasSeparadas[i][j]=='i'){
                palabrasSeparadas[i][j+1]='';
                palabrasSeparadas[i][j+2]='';
                palabrasSeparadas[i][j+3]='';
            }else if(palabrasSeparadas[i][j]=='o'){
                palabrasSeparadas[i][j+1]='';
                palabrasSeparadas[i][j+2]='';
                palabrasSeparadas[i][j+3]='';
            }else if(palabrasSeparadas[i][j]=='u'){
                palabrasSeparadas[i][j+1]='';
                palabrasSeparadas[i][j+2]='';
                palabrasSeparadas[i][j+3]='';
            }
        }
    }
    return palabrasSeparadas;
}

function juntarLetras(){
    let letrasEncriptadas = encriptarPorVocales();
    let mensajeEncriptado;
        let palabraEncriptada=[];
        for (let i = 0; i < letrasEncriptadas.length; i++) {
            palabraEncriptada[i]=letrasEncriptadas[i].join('');
        }
    mensajeEncriptado = palabraEncriptada.join(' ');
    return mensajeEncriptado;
}

function juntarLetrasDesencriptadas(){
    let letrasEncriptadas = desencriptarPorVocales();
    let mensajeEncriptado;
        let palabraEncriptada=[];
        for (let i = 0; i < letrasEncriptadas.length; i++) {
            palabraEncriptada[i]=letrasEncriptadas[i].join('');
        }
    mensajeEncriptado = palabraEncriptada.join(' ');
    return mensajeEncriptado;
}




function encriptar(){
    mensajeObtenido = obtenerMensajeEnPalabras();
    console.log(mensajeObtenido)
    console.log(separarPalabraEnLetras());
    console.log(encriptarPorVocales());
    console.log(juntarLetras());
    imprimirMensajeEncriptado();
}

function desencriptar(){
    mensajeObtenido = obtenerMensajeEnPalabras();
    console.log(mensajeObtenido)
    console.log(separarPalabraEnLetras());
    console.log(desencriptarPorVocales());
    console.log(juntarLetras());
    imprimirMensajeDesencriptado();


}

function imprimirMensajeEncriptado(){
    let img = document.getElementById('img');
    let msj = document.querySelector('h2');
    let contenedor = document.querySelector('.contenedorMensajeSecundario');
    let parrafo = document.querySelector('.contenedorMensajeSecundario > p');

    contenedor.style.marginTop = '1.5vw';
    img.style.display= 'none';
    msj.style.display='none';
    parrafo.style.fontSize = '26px';
    parrafo.innerHTML = juntarLetras();

}
function imprimirMensajeDesencriptado(){
    let img = document.getElementById('img');
    let msj = document.querySelector('h2');
    let contenedor = document.querySelector('.contenedorMensajeSecundario');
    let parrafo = document.querySelector('.contenedorMensajeSecundario > p');

    contenedor.style.marginTop = '1.5vw';
    img.style.display= 'none';
    msj.style.display='none';
    parrafo.style.fontSize = '26px';
    parrafo.innerHTML = juntarLetrasDesencriptadas();

}



// function desencriptar(){

// }
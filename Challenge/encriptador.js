const mensaje = document.querySelector("p#info");

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar(){
    let texto = document.getElementById("frase").value;

    let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat")

    if(textoCifrado.length != texto.length){
        asignarTextoElemento('h4', "El mensaje fue cifrado");
        asignarTextoElemento('p#info', textoCifrado);
        document.getElementById("lupa").style.display='none'
        mensaje.value = textoCifrado;
        document.getElementById("copiado").style.display='initial'
        
    } else{
        asignarTextoElemento('h4', "Ingrese un mensaje valido para encriptar");
        asignarTextoElemento('p#info', "")
        document.getElementById("lupa").style.display='initial'
        document.getElementById("copiado").style.display='none'
    }
}


function desencriptar(){
    let texto = document.getElementById("frase").value;

    let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u")
    if(textoCifrado.length != texto.length){
        asignarTextoElemento('h4', "El mensaje fue descifrado");
        asignarTextoElemento('p#info', textoCifrado);
        document.getElementById("lupa").style.display='none';
        mensaje.value = textoCifrado;
        document.getElementById("copiado").style.display='initial'
    } else{
        asignarTextoElemento('h4', "Ingrese un mensaje valido para desencriptar");
        asignarTextoElemento('p#info', "")
        document.getElementById("lupa").style.display='initial'
        document.getElementById("copiado").style.display='none'
    }
}

function copiar(){
        navigator.clipboard.writeText(mensaje.value)
}





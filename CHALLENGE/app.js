var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".img-chico");
var contenedor = document.querySelector(".mensaje-encriptador");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    var textoEncriptado = encriptarTexto(cajatexto);
    resultado.textContent = textoEncriptado;
    console.log("Texto a encriptar: ", cajatexto);
    console.log("Texto encriptado: ", textoEncriptado);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    var textoDesencriptado = desencriptarTexto(cajatexto);
    resultado.textContent = textoDesencriptado;
    console.log("Texto a desencriptar: ", cajatexto);
    console.log("Texto desencriptado: ", textoDesencriptado);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".texto-a-introducir");
    return cajatexto.value;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    var i = 0;

    while (i < texto.length) {
        if (texto.substr(i, 2) === "ai") {
            textoFinal += "a";
            i += 2;
        } 
        else if (texto.substr(i, 5) === "enter") {
            textoFinal += "e";
            i += 5;
        } 
        else if (texto.substr(i, 4) === "imes") {
            textoFinal += "i";
            i += 4;
        } 
        else if (texto.substr(i, 4) === "ober") {
            textoFinal += "o";
            i += 4;
        } 
        else if (texto.substr(i, 4) === "ufat") {
            textoFinal += "u";
            i += 4;
        } 
        else {
            textoFinal += texto[i];
            i++;
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".boton-copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado: ", contenido);
});

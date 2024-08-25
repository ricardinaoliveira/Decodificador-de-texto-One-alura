const campo_texto = document.querySelector(".campo_texto");
const campo_resposta = document.querySelector(".campo_resposta");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
function botaoIncriptar(){
    const textoEncriptado = encriptar(campo_texto.value);
    campo_resposta.value = textoEncriptado;
    campo_texto.value = "";
    campo_resposta.style.backgroundImage = 'none';
    document.getElementById("botao_copiar").style.display = 'block';


}

function encriptar(stringEncriptada){

    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i <matrizcodigo.length; i++){ 
        if (stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);

        }
    }

   return stringEncriptada;
}

function botaoDescriptografar(){
    const textoDescriptografar = descriptografar(campo_texto.value);
    campo_resposta.value = textoDescriptografar;
    campo_texto.value = "";
    campo_resposta.style.backgroundImage = 'none';
    document.getElementById("botao_copiar").style.display = 'block';


}

function descriptografar(stringDescriptografar){

    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"],["u","ufat"]];
    stringDescriptografar = stringDescriptografar.toLowerCase();
    for (let i = 0; i <matrizcodigo.length; i++){ 
        if (stringDescriptografar.includes(matrizcodigo[i][1])){
            stringDescriptografar = stringDescriptografar.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);

        }
    }

   return stringDescriptografar;
}

function copiarTexto(){
    campo_texto.value = campo_resposta.value;
    campo_resposta.value = "";
    campo_resposta.style.backgroundImage = "url('./img/boneca.png')";
    document.getElementById("botao_copiar").style.display = 'none';


}

campo_resposta.addEventListener('input',function(){
    if(campo_resposta.value === "") {
      campo_resposta.style.backgroundImage = "url('./img/boneca.png')";
      document.getElementById("botão_copiar").style.display = 'none';

   }
});
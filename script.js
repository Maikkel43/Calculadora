function agregar(valor){
    let pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
}
function limpiar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

function calcular(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}
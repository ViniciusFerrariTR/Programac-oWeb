function calcular() {
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var resultado;
    if (validarCampos()) {
        resultado = peso / (altura * altura);
        resultado = resultado.toFixed(2);
    }
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = resultado;
}


function validarCampos(){
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    if(altura.value<=0){
        altura.style.border = "1px solid red";
        altura.style.outline = "1px solid red";
        altura.focus();
        return false;
    }
    if (peso.value <=0) {
        peso.style.border = "1px solid red";
        peso.style.outline = "1px solid red";
        peso.focus();
        return false;
    }


}
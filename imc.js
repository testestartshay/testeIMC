function calcularimc(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value

    altura = altura/100
    var imc = (peso/(altura * altura)).toFixed(2)
    var resultado

    if(imc<18.5){ 
            resultado = 'Abaixo do peso.'
    } else if(imc <= 24.9){
        resultado = 'Saudável.'
    } else if (imc <= 29.9){
        resultado = 'Sobrepeso'
    } else if( imc <=39.9){
        resultado = 'Obeso'
    } else{
        resultado = 'Obesidade grave'
    }

    document.getElementById('resultado').innerHTML = `Imc: ${imc} <br> Classificação: <strong>${resultado}</strong>` 


}
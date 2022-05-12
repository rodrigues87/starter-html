this.objetoInputIdade = document.getElementById("idadeDigitada");
this.objetoResultadoPositivo = document.getElementById("resultadoPositivo");
this.objetoResultadoNegativo = document.getElementById("resultadoNegativo");

function verificarIdade(){
    const idade = objetoInputIdade.value;

    if(verificarValorMaiorIdade(idade)){
        this.objetoResultadoNegativo.hidden = true;
        this.objetoResultadoPositivo.hidden = false;
        this.objetoResultadoPositivo.textContent = "Esta pessoa é maior de idade"
    }else {
        this.objetoResultadoPositivo.hidden = true;
        this.objetoResultadoNegativo.hidden = false;
        this.objetoResultadoNegativo.textContent = "Esta pessoa não é maior de idade"

    }
}


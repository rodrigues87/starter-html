const listaIdades = [24,8,17,-2]

for (const idade in listaIdades){
    validarEExibirConsoleDeMaiorIdade(listaIdades[idade])

}

function validarEExibirConsoleDeMaiorIdade(idade) {

    if(verificarValorMaiorIdade(idade)){
        console.log("Esta pessoa é maior de idade")
    }else {
        console.log("Esta pessoa não é maior de idade")

    }
}

function validarValorIdade(idade) {
    ////////////////Validando/////////////////////
    if(idade < 0 ){
        throw "Esta idade não é válida"
    }
//////////////////////////////////////////////
}

function verificarValorMaiorIdade(idade) {

    validarValorIdade(idade)

    if(idade >= 18){
        return true;
    }
    return false;
}



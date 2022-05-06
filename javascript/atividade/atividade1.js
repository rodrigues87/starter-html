//VERIFIQUE SE UMA DETERMINADA PESSOA É MAIOR DE IDADE

const idadePessoa = 24;

exibirResultCheckIdade(idadePessoa);

function exibirResultCheckIdade(idadePessoa) {
    if(verificarMaiorIdade(idadePessoa)){
        console.log("Essa pessoa é maior de 18 anos")
    }else {
        console.log("Essa pessoa é menor de 18 anos")
    }
}

function verificarMaiorIdade(idadePessoa) {

    validarIdade(idadePessoa);

    if(idadePessoa >= 18){
        return true;
    }

    return false;
}

function validarIdade(idadePessoa) {
    if(idadePessoa <= 0 ){
        throw "Esta não é uma idade válida";
    }
}
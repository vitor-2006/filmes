function verificarTitulo(titulo) {
    if(titulo.length === 0){
        return false
    }
    return true
}

function verificarDiretor(diretor) {
    if(diretor.length === 0 || !isNaN(diretor)){
        return false
    }
    return true
}

function verificarAno(ano) {
    if(ano.length === 0 || isNaN(ano)){
        return false
    }
    return true
}

function verificarGenero(genero) {
    if(genero.length === 0 || !isNaN(genero)){
        return false
    }
    return true
}

export{ verificarAno, verificarDiretor, verificarGenero, verificarTitulo }

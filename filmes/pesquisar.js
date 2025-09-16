import { filme } from "./array.js";

function pesqPorTitulo(req, res) {
    const { titulo } = req.query
    if(titulo.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const tituloFind = filme.filter((element) => {
        if(element.titulo.toLowerCase().trim() === titulo.toLowerCase().trim()){
            return element
        }
    })
    if(!tituloFind){
        return res.status(404).send("título não encontrado!")
    }
    return res.status(201).send(tituloFind)
}

function pesqPorDiretor(req, res) {
    const { diretor } = req.query
    if(diretor.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const diretorFind = filme.filter((element) => {
        if(element.diretor.toLowerCase().trim() === diretor.toLowerCase().trim()){
            return element
        }
    })
    if(!diretorFind){
        return res.status(404).send("diretor não encontrado!")
    }
    return res.status(201).send(diretorFind)
}

function pesqPorAno(req, res) {
    const { ano } = req.query
    if(ano.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const anoFind = filme.filter((element) => {
        if(element.ano.toLowerCase().trim() === ano.toLowerCase().trim()){
            return element
        }
    })
    if(!anoFind){
        return res.status(404).send("ano não encontrado!")
    }
    return res.status(201).send(anoFind)
}

function pesqPorGenero(req, res) {
    const { genero } = req.query
    if(genero.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }
    const generoFind = filme.filter((element) => {
        if(element.genero.toLowerCase().trim() === genero.toLowerCase().trim()){
            return element
        }
    })
    if(!generoFind){
        return res.status(404).send("genero não encontrado!")
    }
    return res.status(201).send(generoFind)
}

export { pesqPorAno, pesqPorDiretor, pesqPorGenero, pesqPorTitulo }
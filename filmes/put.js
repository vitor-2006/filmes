import { filme } from "./array.js";
import { verificarAno, verificarDiretor, verificarGenero, verificarTitulo } from "./verificar.js";

export function putFilme (req, res) {
    const { id } = req.params

    const tituloFind = verificarTitulo(req.body.titulo)
    if(!tituloFind){
        return res.status(400).send("título inválido!")
    }

    const diretorFind = verificarDiretor(req.body.diretor)
    if(!diretorFind){
        return res.status(400).send("diretor inválido!")
    }
    
    const anoFind = verificarAno(req.body.ano)
    if(!anoFind){
        return res.status(400).send("ano inválido!")
    }

    const generoFind = verificarGenero(req.body.genero)
    if(!generoFind){
        return res.status(400).send("genero inválido!")
    }

    filme.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.titulo = update.titulo
            element.diretor = update.diretor
            element.ano = update.ano
            element.genero = update.genero
            return res.status(200).send("filme editado com sucesso!")
        }
    })
    return res.status(404).send("filme não encontrado!")
}
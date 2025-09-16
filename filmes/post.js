import { filme, idGen } from "./array.js";
import { verificarAno, verificarDiretor, verificarGenero, verificarTitulo } from "./verificar.js";

export function postFilme(req, res) {
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

    const novoFilme = 
        {
        'titulo': req.body.titulo,
        'diretor': req.body.diretor,
        'ano': req.body.ano,
        'genero': req.body.genero,
        'id': idGen.value
        }
    idGen.value++
    filme.push(novoFilme)
    return res.status(200).send('Filme registrado!')
}
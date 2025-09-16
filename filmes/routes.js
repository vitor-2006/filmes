import express from "express"

import { getFilme } from "./get.js"
import { postFilme } from "./post.js"
import { putFilme } from "./put.js"
import { deleteFilme } from "./delete.js"
import { pesqPorAno, pesqPorDiretor, pesqPorGenero, pesqPorTitulo } from "./pesquisar.js"

const routesFilme = express.Router()

routesFilme.get('/filmes', getFilme)
routesFilme.post('/filmes', postFilme)
routesFilme.put('/filmes/:id', putFilme)
routesFilme.delete('/filmes/:id', deleteFilme)

routesFilme.get('/filmes/busca/', pesqPorTitulo)
routesFilme.get('/filmes/busca/', pesqPorDiretor)
routesFilme.get('/filmes/busca/', pesqPorAno)
routesFilme.get('/filmes/busca/', pesqPorGenero)

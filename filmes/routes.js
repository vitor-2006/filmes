import express from "express"

import { getFilme } from "./get.js"
import { postFilme } from "./post.js"
import { putFilme } from "./put.js"
import { deleteFilme } from "./delete.js"

const routesFilme = express.Router()

routesFilme.get('/alugueis', getFilme)
routesFilme.post('/alugueis', postFilme)
routesFilme.put('/alugueis/:id', putFilme)
routesFilme.delete('/alugueis/:id', deleteFilme)
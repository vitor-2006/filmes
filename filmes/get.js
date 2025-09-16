import { filme } from "./array.js";

export function getFilme (req, res) {
    if(filme.length === 0){
        return res.status(404).send("nenhum filme registrado!")
    }
    return res.status(201).send(filme)
}
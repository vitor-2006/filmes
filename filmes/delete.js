export function deleteFilme(req, res) {
    const { id } = req.params
    const filmeIndex = estudante.findIndex((element) => element.id == id)

    if(filmeIndex !== -1){

        filme.splice(filmeIndex, 1)
        return res.status(200).send('filme removido!')
    }
    return res.status(404).send("filme não encontrado")
}
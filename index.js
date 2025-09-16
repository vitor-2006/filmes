import express from 'express'
import { routesFilme } from './filmes/routes.js';
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesFilme)

app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
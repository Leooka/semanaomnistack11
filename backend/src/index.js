const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/** 
* Rota / Recurso 
*/

/*
 *  Método HTTP:
 *
 * GET: Buscar/listar uma infomação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/ 

/**
 * Tipos de parametros
 * 
 * Query: Params: Parametros nomeados enviados na rota após "?" (FIltros, paginação)
 * Route Params: Paramentros utilizando para identificar recursos
 * Request Body: 
 */

/** 
 * SQL: SQLite
 * */ 


/**
 * Driver : SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 * */  
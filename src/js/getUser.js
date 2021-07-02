const db = require('./database')

async function getUser (nome){
    let result

    if(nome === 0){
        const buscarTodos = "SELECT * FROM cruduser";
        result = await db.query(buscarTodos);
        console.log("Lista de Usuarios")
        console.log(result.rows);
    }
    else{
        const BuscaEspecifica = "SELECT * FROM cruduser where nome = $1"
        result = await db.query(BuscaEspecifica,[nome]);
        console.log("Usuario")
        console.log(result.rows)
    }
    await db.end();
}

module.exports = getUser;
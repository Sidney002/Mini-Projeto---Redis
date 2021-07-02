const db = require('./database')

async function attUser(nome, email){

    const update = "UPDATE cruduser SET nome = $1 WHERE email=$2"
    await db.query(update, [nome, email])
    console.log("Dados atualizados com sucesso!")
    await db.end();

}

module.exports = attUser;
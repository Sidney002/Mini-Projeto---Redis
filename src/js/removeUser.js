const db = require('./database');

async function removeUser(nome, email){

    const Delete = "DELETE FROM cruduser WHERE email = $1"
    await db.query(Delete, [email]);
    console.log("O usuário" + nome + " foi excluido com sucesso!");

}

module.exports = removeUser;


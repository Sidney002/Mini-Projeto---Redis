const db = require('./database')

async function addUser (nome, email){

    const newUser = "INSERT INTO cruduser (nome,email) VALUES ($1, $2)";
    await db.query(newUser,[nome,email]);
    console.log('Usuário adicionado com sucesso!')
    await db.end();    
        
}

module.exports = addUser;
const db = require('./database')

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, ()=>{
    console.log('Aplicação rodando na porta ' + port)
});

app.post('cruduser', db.addUser, [UserTest, Email]);
app.get('cruduser', db.getUser);
app.put('cruduser', db.attUser);
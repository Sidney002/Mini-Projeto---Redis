const db = require('./js/database')
const redis = require('./js/redis')
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const express = require('express');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extended:false});


//app start
app.use(express.json());

app.listen(3000, function(req,res){
        console.log("Conectado");
});

//template engine
app.use("/js", express.static("js"))
app.engine("handlebars", handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get("/inserir",function(req, res){
    res.render('inserir')
})
app.get("/selecionar:id?", function(req, res){
    if(!req.params.email){
        db.query("select * from cruduser order by nome asc", function(err,results,fields){
            res.render('selecionar',{data:results.rows})
        })
    }
})
app.get("/verposts", urlencodeParser, function(req, res){
    res.render('verposts',)
})
app.post("/verposts", urlencodeParser, function(req, res){
    let key = req.body.email
    let aux = redis.get(key)
    res.send(aux)
    console.log(aux)
    
});
app.get("/", function(req, res){
    res.render('index')
})
app.post("/controllerForm", urlencodeParser,function(req, res){
        const newUser = "INSERT INTO cruduser (nome,email) VALUES ($1, $2)";
        db.query(newUser,[req.body.name,req.body.email]);
        redis.set(req.body.email, req.body.rascunho)
});



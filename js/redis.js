const redis = require("redis");
require('dotenv').config();

const Redis_client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

Redis_client.on("error",function(error){
    console.log(error);
});
Redis_client.on("connect",function(error){
    console.log("Redis_Client Connected");
});

async function set(key, post){
    await Redis_client.set(key, JSON.stringify(post), "EX", 7200);
}
function get(key){
        Redis_client.get(key,function(err,reply){
        if(reply!= null){
            const teste = JSON.parse(JSON.stringify(reply));
            console.log(teste);
            return teste;
        }
        else{ console.log("chave não encontrada")}
    })
}
module.exports = {
    set,
    get
}
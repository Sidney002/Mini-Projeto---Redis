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
    await Redis_client.set(key, post, "EX", 7200);
}
async function get(key){
    await Redis_client.get(key, redis.print);
}


module.exports = {
    set,
    get
}
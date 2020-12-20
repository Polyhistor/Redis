import Redis from "ioredis"

// redis config with password
const redis = new Redis({password: 'kilkil123'});

// strings
redis.set('name', 'pouya', 'Ex', 5); 
redis.get('name', (err, result)=>{
    console.log(result)
})

redis.get('country', (err, result)=>{
    console.log(result)
})

redis.incrby('number', 200)
redis.get('number', (err,result)=> {
    console.log(result)
})

redis.mset()
const Strings = redis => {

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

    redis.mset('street', 'awesome', 'city', 'istanbul')
    redis.mget('street', 'city', (err, result)=>{
        console.log(result)
    })

}

export default Strings


const Hashes = redis => {
    redis.hmset('user:450', 'firstName', 'Jeremy', 'lastName', 'Henri')
    redis.hgetall('user:450', (err, result) => {
        console.log(result)
    })
}

export default Hashes
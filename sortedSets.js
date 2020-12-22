const SortedSets = redis => {

    redis.zadd('spaceships','1969', 'apollo', '1998', 'deep space', '2008', 'Falcon 1')
    redis.zrange('spaceships', 0, -1, (err, result) => {
        console.log(result)
    })
    
    redis.zrevrange('spaceships', (err, result) => {
        console.log(result)
    })

    redis.zrangebyscore('spaceships', '-inf','1998', 'withscores', (err, result)=> {
        console.log(result)
    })

}

export default SortedSets
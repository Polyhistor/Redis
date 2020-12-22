const Sets = redis => {

    redis.sadd('names', 'Maryy', 'Pouya', 'Jack', 'Jane')
    redis.smembers('names' , (err, result) => {
        console.log(result)
    })

}

export default Sets
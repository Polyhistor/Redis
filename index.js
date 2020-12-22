import Redis from "ioredis"
import Strings from "./strings"
import Hashes from "./hashes"

// redis driver with password
const redis = new Redis({password: 'kilkil123'});

// strings
Strings(redis);

// hashes
Hashes(redis)
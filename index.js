import Redis from "ioredis"
import Strings from "./strings"
import Hashes from "./hashes"
import Lists from "./lists"
import Sets from "./sets"
import SortedSets from "./sortedSets"

// redis driver with password
const redis = new Redis({password: 'kilkil123'});

// strings
Strings(redis);

// hashes
Hashes(redis)

// lists 
Lists(redis)

// Sets
Sets(redis)

// Sorted sets
SortedSets(redis)
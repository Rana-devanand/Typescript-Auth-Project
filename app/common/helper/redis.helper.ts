import Redis from "ioredis";
import { REDIS_HOST, REDIS_PORT, REDIS_DATABASE } from "./config.helper"

const redisClient = new Redis({
  host: REDIS_HOST,
  port : Number(REDIS_PORT),
  password : String(REDIS_DATABASE)
})

redisClient.on('connect', () =>{
    console.log('Connected to Redis')
})

export default redisClient;
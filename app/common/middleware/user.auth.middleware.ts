import jwt from "jsonwebtoken";
import redisClient from "../helper/redis.helper";
import { Request, Response, NextFunction } from "express";
// const {JWT_SECRET_KEY} = require(".././helper/config.helper")
import {JWT_SECRET_KEY} from "../helper/config.helper"

// Add this interface at the top of the file
export interface CustomRequest extends Request {
  user?: any;
}

export const userAuth = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token ||(req.headers.authorization ? req.headers.authorization.split(' ')[1] : null);
    console.log("token",token);
    if(!token) {
        throw new Error ('Token not provided');
    }

    const isBlacklisted = await redisClient.get(token);
    if(isBlacklisted) {
        throw new Error('Token has been expired' );
    }
    const decodeToken = jwt.verify(token , String(JWT_SECRET_KEY))
    if(!decodeToken){
        throw new Error('Invalid token' );
    }
    req.user = decodeToken
    console.log(req.user);
    next();
}
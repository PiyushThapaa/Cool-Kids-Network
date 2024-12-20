import { User } from "../userModel.js";
import errorHandler from "./error.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = async (req,res,next) => {
    const { token } = req.cookies;
    if (!token)  return next(new errorHandler("Login First...",401))       
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id);
    next();
}
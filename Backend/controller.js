import { User } from "./userModel.js";
import errorHandler from "./Middlewares/error.js"
import { sendCookie } from "./token.js";

//Login controller

export const register = async (req,res,next) => {
    try {
        const {firstName,lastName,country,email} = req.body;
        let user = await User.findOne({ email });
        if (user) return next(new errorHandler("User already exist", 400))
        if(email=="coolkidsnetwork@gmail.com"){
            user = await User.create({ firstName,lastName,country,email,role:"Coolest Kid" });
        } else{
            user = await User.create({ firstName,lastName,country,email });
        }
        sendCookie(user, res, `Registered Successfully as ${user.firstName}`, 201)
    } catch (error) {
        next(error)
    }
}


//Login controller

export const login = async (req,res,next) => {
    try {
        const {email} = req.body;
        let user = await User.findOne({ email });
        if (!user) return next(new errorHandler("Email not registered", 400));
        sendCookie(user, res, `Welcome Back ${user.firstName}`, 200)
    } catch (error) {
        next(error)
    }
}

//Logout Controller 

export const logout = (req,res,next)=>{
    try {
        res.status(200).cookie("token","",{
            expires : new Date(Date.now()),
            // eslint-disable-next-line no-undef
            sameSite:process.env.NODE_ENV === "development" ? "lax" : "none",
            // eslint-disable-next-line no-undef
            secure:process.env.NODE_ENV === "development" ? false : true
        }).json({
            success:true,
        })
    } catch (error) {
        next(error)
    }
}

//User Data Controller
export const userData = (req,res,next) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        })
    } catch (error) {
        next(error)
    }
}

//All Users Controller
export const allUsers = async (req,res,next) => {
    try {
        const user = req.user;
        if(user.role == "Coolest Kid"){
            const allUsers = await User.find({ _id: { $ne: user._id } });
            res.status(200).json({
                success: true,
                data: allUsers
            })
        } else if(user.role == "Cooler Kid"){
            const allUsers = await User.find({ _id: { $ne: user._id } }).select('-email -role');
            res.status(200).json({
                success: true,
                data: allUsers
            })
        } else {
            res.status(200).json({
                success: false,
                message:"Access Denied"
            })
        }
    } catch (error) {
        next(error)
    }
}

//Role Change Controller
export const changeRole = async(req,res,next) => {
    try {
        const  me = req.user;
        const {changeRoleTo, id} = req.body;
        if (me.role == "Coolest Kid") {
            const user = await User.findById(id);
            user.role = changeRoleTo;
            await user.save();
            res.status(200).json({
                success: true,
                message: "Role Updated"
            })
        } else {
            res.status(400).json({
                success: false,
                message: "Access Denied"
            })
        }
    } catch (error) {
        next(error)
    }
}
import { User } from "./models/user";


//Login controller

export const register = async (req,res,next) => {
    try {
        const {firstName,lastName,country,email,role} = req.body;
        let user = await User.findOne({ email });
        if (user) return next(new errorHandler("User already exist", 400))
        user = await User.create({ firstName,lastName,country,email,role })
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

export const logout = (req,res)=>{
    res.status(200).cookie("token","",{
        expires : new Date(Date.now()),
        sameSite:process.env.NODE_ENV === "development" ? "lax" : "none",
        secure:process.env.NODE_ENV === "development" ? "false" : "true"
    }).json({
        success:true,
    })
}


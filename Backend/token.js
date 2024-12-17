

export const sendCookie = (user, res, message, statusCode = 200) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge:60*60*1000, //60 mins
        sameSite:process.env.NODE_ENV === "development" ? "lax" : "none",
        secure:process.env.NODE_ENV === "development" ? "false" : "true"
    }).json({
        success: true,
        message: message
    })
}
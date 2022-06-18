const { generateToken, verifyToken } = require("../CommonLib/JWTtoken");
const userModel = require("../Models/userModel");

const login = async(req, res, next) => {
    try {
        let {useremail, password} = req.body;
        let response = await userModel.find({useremail : useremail, password : password})
        if(response.length==0){
            res.json({status : false, message : "Login failed", token : false})
            return;
        }
        let token = generateToken({...response[0]})
        console.log(response)
        res.json({status : true, message : "Login Success", token})
    } catch (error) {
        res.status(400).json({error : error, status : false, token : false})
    }
}

const signup = async(req, res, next) => {
    try {
        await userModel.insertMany([req.body]);
        res.json({status : "Done", message : "Signup Success"})
    } catch (error) {
        res.json({error : error})
    }
}

const verifyTokenFn = (req, res, next) => {
    try {
        let {token} = req.body;
        // console.log(token)
        let response = verifyToken(token);
        // console.log(response)
    if(!response){
        res.json({status : false, message : "Invalid Token"})
        return;
    }
       res.json({status : true, message : "Authorised!"})
    } catch (error) {
        res.json({error : error, message : "Invalid Token", status : false})
    }
}

module.exports = {
    login,
    signup,
    verifyTokenFn
}
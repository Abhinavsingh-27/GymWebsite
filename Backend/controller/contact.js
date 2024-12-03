import ErrorHandler from "../error/error.js";
import { Contact } from "../models/Schema.js"; 

export const sendReservation = async (req, res, next)=>{
    const { name, email, message } = req.body;
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return next(new ErrorHandler("Request body cannot be empty", 400));
      }

    if(!name || !email || !message){
        return next ( new ErrorHandler("Please fill all fields", 400));
    }
    
    try{
        await Contact.create( {name, email, message});
        res.status(200).json({
            success: true,
            message: "Message Sent Succesfully"
        })
    }catch(error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors)
            .map((err)=> err.message).join(",");
            return next( new ErrorHandler(validationErrors, 400));
        }
        return next(error);
    }
}
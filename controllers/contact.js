import { connectDb } from "../database/db.js";
import TryCatch from "../middlewares/TryCatch.js";
import { Contact } from "../models/Contact.js";

export const contact = TryCatch(async(req,res)=>{
    const {email,name,subject,message} = req.body

    await connectDb();

    const data = new Contact({
        name, 
        email,
        subject,
        message,
    });

    await contact.save();

    res.status(200).json({
        message: "Message sent successfully",
    });
    
});
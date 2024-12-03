import mongoose from "mongoose";
import validator from "validator";

const mySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must Contain at least 3 characters!"],
        maxLength: [30, "Name cannot exceed 30 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"]
    },
    message: {
        type: String,
        required: true,
    }
});

export const Contact = mongoose.model('Contact', mySchema)
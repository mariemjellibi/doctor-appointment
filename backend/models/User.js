import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isDoctor:{
        type:Boolean,
        default:false
    }
   
},{
    timestamps: true
})
const User= mongoose.model('User',userSchema);
export default User;
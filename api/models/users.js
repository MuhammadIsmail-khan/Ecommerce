const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type : String ,  //email is unique and it will be used as a login id for the users
        unique : true ,
        required:true,
        validate:{
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: 'Invalid email format',
          },
        //        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{
        
    },
    password:{
        required:true,
        type:String,

    },
    verified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    addresses:[
        {
            name:String,
            mobileNo:String,
            houseNo:String,
            street:String,
            landmark:String,
            city:String,
            country:String,
            postalCode:String
        }
    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})

const User=mongoose.model("User",userSchema)
module.exports=User
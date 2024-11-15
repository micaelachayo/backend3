import mongoose from "mongoose";

export const usuarioModelo=mongoose.model(
    "users",
    new mongoose.Schema(
        {
            first_name: String, 
            last_name: String, 
            email: {
                type: String, unique: true
            }, 
            password: String,
            cart: {
                type: mongoose.Schema.Types.ObjectId, ref:"carts"
            },
            role: {
                type: String, default: "user"
            },
            pets:{
                type:[
                    {
                        _id:{
                            type:mongoose.SchemaTypes.ObjectId,
                            ref:'Pets'
                        }
                    }
                ],
                default:[]
            }
        },
        {
            timestamps:true, strict: false
        }
    )
)
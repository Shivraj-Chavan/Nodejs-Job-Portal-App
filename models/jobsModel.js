import mongoose from "mongoose";

const jobSchema=mongoose.Schema({
    company:{
        type:String,
        require:[true,'Company name is Required']
    },
    position:{
        type:String,
        required:[true,'Job Position is Required'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['pending','reject','interview'],
        default:'pending'
    },
    workType:{
        type:String,
        enum:["full-time","part-time",'internship'],
        default:"full-time"
    },
    workLocation:{
        type:String,
        default:'Mumbai',
        required:[true,'Work location is Required']
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timeStamps:true}
)

export default mongoose.model("Job",jobSchema)
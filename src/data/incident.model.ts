import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    lat:{
        type: Number,
        required : true
    },
    lng:{
        type: Number,
        required : true
    },
    isSent:{
        type:Boolean,
        required:false,
        default:false
    },
    genre:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    creationDate:{
        type: Date,
        required:true
    }
});

export const IncidentModel = mongoose.model("Incident", incidentSchema)

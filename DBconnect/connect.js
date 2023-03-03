const mongoose=require("mongoose")

const DBconnect=()=>{
    return mongoose.connect("mongodb+srv://deepakahlawat10:deepakahlawat10@cluster0.qkndiwa.mongodb.net/iwcnNotes?retryWrites=true&w=majority")
}

module.exports={DBconnect}
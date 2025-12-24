const mongoose=require('mongoose');

const SearchHistorySchema=new mongoose.Schema({
    query:{
        type:String,
        required:true
    },
    timeStamp:{
        type:Date,
        default:Date.now(),
    }
}
)

module.exports=mongoose.model('SearchHistory',SearchHistorySchema)
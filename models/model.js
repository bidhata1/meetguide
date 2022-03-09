var mongoose=require('mongoose');
const GuideSchema=mongoose.Schema({
    name:String,
    description:String
});
module.exports=mongoose.model('GuideDetails',GuideSchema);
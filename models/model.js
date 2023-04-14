

































































var mongoose=require('mongoose');
const GuideSchema=mongoose.Schema({
    _id:1,
    name:String,
    rate:"20",
    address:String,
    contact:"9860123456",
    isCertified: true, // false means local guide
    languages: [{
        language1 : String,
        language2 : String
         }],
    reviews:[
     String 
        ],
    description:String
});
module.exports=mongoose.model('GuideDetails',GuideSchema);
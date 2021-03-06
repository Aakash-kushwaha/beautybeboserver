const {model,Schema} =require("mongoose");
const bodywashSchema =new Schema({
    
        title: {type:String, required:true, },
        link: {type:String, required:true},
        condition: {type:String, required:true},
        price: {
        raw: {type:String, required:true},
        extracted: {type:String, required:true}
        },
        top_rated: {type:Boolean, required:true},
        seller_store: {
        link: {type:String, required:true},
        thumbnail: {type:String, required:true}
        },
        returns: {type:String, required:true},
        extensions: [
            {type:String, required:true}
        ],
        thumbnail: {type:String, required:true}
        }
)
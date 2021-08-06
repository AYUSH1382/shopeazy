const mongoose  = require("mongoose");

const HandSchema = mongoose.Schema({
    name: {type: String,require},
    varients: [],
    prices : [],
    category : {type: String,require},
    image : {type: String,require},
    description : {type:String,require}
},{
        timestamps : true,
});

const handModel = mongoose.model('Handicrafy',HandSchema,'Handicrafy');

module.exports = handModel
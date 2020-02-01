	const mongoose  = require('mongoose')
	const uniqueValidator = require('mongoose-unique-validator');
	const PetSchema = new mongoose.Schema({
    		name: {type: String, required: [true,"Pet name is required."], unique: true, minlength: [3, "Pet name must be at least 3 letters long"]},
    		type: {type: String, required: [true,"Pet type is required."], minlength: [3, "Pet type must be at least 3 letters long"]},
    		description: {type: String, required: [true,"Pet description is required."], minlength: [3, "Pet description must be at least 3 letters long"]},
    		skill1: {type: String},
    		skill2: {type: String},
    		skill3: {type: String},
			likes: {type:Number, default:0}
	},{timestamps: true});
	PetSchema.plugin(uniqueValidator,{message:"Pet name must be unique" });
	const Pet = mongoose.model('Pet', PetSchema);
	module.exports =  Pet;
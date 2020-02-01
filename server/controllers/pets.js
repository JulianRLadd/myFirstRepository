		const mongoose  = require ('../config/mongoose.js')
		const Pet = require('../models/pet.js')

		module.exports  = {
    			index: function(req, res) {
    				Pet.find().sort({type:'asc', test: -1})
	                    .then(data => res.json(data))
	                    .catch(err => res.json(err));
    			},
    			create: function(req, res) {
        			var pet = new Pet(req.body);
        			pet.save()
                        .then(data =>res.json(data))
                        .catch(err => res.json(err));
    				},
    			find: function(req,res){
                        Pet.findOne({_id:req.params.id})
                             .then(data => res.json(data))
                             .catch(err => res.json(err));
    					},
                like: function(req,res){
                    console.log("***CORRECT ID**",req.params)
                    Pet.findOne({_id:req.params.id})
                    .then(pet =>{
                        pet.likes += 1;
                        console.log('******LIKE*******',pet)
                        return pet.save();
                    })
                            .then(data =>res.json(data))
                            .catch(err => res.json(err));
                        },
                update: function(req,res){
                    Pet.findOne({_id:req.params.id})
                    .then(pet =>{
                        console.log('******CONTROLLERS*******',req.body)
                        pet.name = req.body.name;
                        pet.type = req.body.type;
                        pet.description = req.body.description;
                        pet.skill1 = req.body.skill1;
                        pet.skill2 = req.body.skill2;
                        pet.skill3 = req.body.skill3;
                        console.log('******PET*******',pet)
                        return pet.save();
                    })
                            .then(data =>res.json(data))
                            .catch(err => res.json(err));
                        },
                delete: function(req,res){
                    Pet.deleteOne({_id:req.params.id})
                            .then(data =>res.json(data))
                            .catch(err => res.json(err));
                        }
				};

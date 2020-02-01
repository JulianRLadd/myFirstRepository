var pets  = require ('../controllers/pets.js')
	module.exports = function (app){
    		app.get('/pets', (req, res) => {
        		pets.index(req,res);
    		});
		    app.post('/pets', (req, res) => {
	            pets.create(req,res);
	        });
	        app.get('/pets/:id', (req, res) => { 
	            pets.find(req,res);
	        });
            app.put('/pets/:id',(req, res) => {
                pets.update(req,res);
            }); 
            app.put('/pets/:id/like',(req, res) => {
                pets.like(req,res);
            }); 
            app.delete('/pets/:id',(req, res) => {
                pets.delete(req,res);
            }); 
            app.get('/**',(req,res)=>{
            res.sendFile('index.html', { root: './public/dist/public' });        
            })   
            
        }
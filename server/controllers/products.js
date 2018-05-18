const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    index: (req,res)=>{
        Product.find({}, (err,products)=>{
            if(err){
                return res.json({"Error":err});
            }else{
                return res.json(products);
            }
        });
    },
    create: (req,res)=>{
        var product = new Product(req.body);
        product.save((err, savedProduct)=>{
            if(err){
                errors = [];
                for(e in err.errors){
                    errors.push(err.errors[e].message)
                }
                return res.json({'errors':errors});
            }else{
                return res.json(savedProduct);
            }
        });
    },
    edit: (req,res)=>{
        Product.findOne({_id: req.params.id}, (err,product)=>{
            if(err){
                return res.json({"Error":err});
            }else{
                return res.json(product);
            }
        });
    }, 
    remove: (req,res)=>{
        Product.remove({_id: req.params.id}, (err, product)=>{
            if(err){
                return res.json({"Error":err});
            }else{
                return res.json(product);
            }
        });
    },
    update: (req,res)=>{
        Product.update({_id: req.params.id}, {name: req.body.name, quantity: req.body.quantity, price: req.body.price}, function(err,updatedProduct){
            if(err){
                errors = [];
                for(e in err.errors){
                    errors.push(err.errors[e].message)
                }
                return res.json({'errors':errors});
            }else{
                return res.json(updatedProduct);
            }
        });
    }
}
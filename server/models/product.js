const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    name: {type:String, required:[true,"Products must contain a name."], minLength:[3, "Name must be at least 3 characters"]},
    quantity: {type:Number, required:[true,"Products must contain a quantity."], minLength:[1, "Product must be at least 3 characters long"]},
    price: {type:Number, required:[true, "Products must contain a price."]}
}, {timestamps:true});

mongoose.model('Product', ProductSchema);
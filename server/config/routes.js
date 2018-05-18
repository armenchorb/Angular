const mongoose = require('mongoose');
const Product = mongoose.model('Product');
var controllers = require('./../controllers/products.js');

module.exports = function(app){
    app.get('/api/products', controllers.index);
    app.post('/api/products', controllers.create);
    app.get('/api/product/:id', controllers.edit);
    app.put('/api/product/:id', controllers.update);
    app.delete('/api/product/:id', controllers.remove);
}

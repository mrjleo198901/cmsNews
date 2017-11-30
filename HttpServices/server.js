/**
 * Created by xaipo on 11/17/2017.
 */
/**
 * Created by xaipo on 10/31/2017.
 */
// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express = require('express');
var mongoose=  require('mongoose');
var bodyParser= require('body-parser');
var cors = require('cors');
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="MongoDb">

mongoose.connect('mongodb://localhost/News', function(error){
//mongoose.connect('mongodb://localhost/salud_ocupacional', function (error) {
    if(error){
        throw error;
    }else{
        console.log('Conectado a MongoDB');
    }
});

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Express">
var app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());// permite angular interactuar
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Routes">

app.get('/', function (req, res) {
    res.send('<h1 style="color:red">Welcome to my application Im server  Express with Nodejs</h1>');
});
// </editor-fold >


app.use('/api', require('./Routes/routeUbicacion'));
/*app.use('/api', require('./Routes/routePersona'));
app.use('/api', require('./Routes/routeAgent'));
app.use('/api', require('./Routes/routeRealTime'));*/
//app.use('/api', require('./Routes/routeCategory'));


// <editor-fold defaultstate="collapsed" desc="Server Run">
app.listen(3000);
console.log("servidor ejecutando en el puerto 3000");

// </editor-fold>

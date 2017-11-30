/**
 * Created by xaipo on 11/17/2017.
 */
var restful = require("node-restful");
var mongoose = restful.mongoose;

var News = new mongoose.Schema({

    "Titulo" : {
        type: String

    },"Detalle" : {
        type: String

    },"Autor" : {
        type: String

    },"Fecha" : {
        type: String

    },"Hora" : {
        type: String

    },"Categoria" : {
        type: String

    },"Tipo" : {
        type: String

    }
    ,"Fotos" : {
        type: Array

    } ,"Videos" : {
        type: Array

    }


},{ collection: 'news'

});

module.exports = restful.model('news', News);
/**
 * Created by xaipo on 11/17/2017.
 */
var express= require('express');
var router= express.Router();

var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/security';
var Productos = require('../Models/modelNoticia');

Productos.methods(['get','put','post','delete','search']);
Productos.register(router,'/noticia');







module.exports=router;

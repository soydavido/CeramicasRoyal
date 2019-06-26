var express = require('express');
var router = express.Router();
const bd = require("../db.js")


router.get('/consultaClientes', function(req, res, next) {
  res.render('Cliente/consultaClientes');
});

router.get('/consultaPedidos', function(req, res, next) {
  res.render('Cliente/consultaPedidos');
});

router.get('/consultaFacturas', function(req, res, next) {
  res.render('Cliente/consultaFacturas');
});

router.get('/consultaContratos', function(req, res, next) {
  res.render('Cliente/consultaContratos');
});

router.get('/registroClientes', function(req, res, next) {
  res.render('Cliente/registroClientes');
});

router.get('/registroPedidos', function(req, res, next) {
  res.render('Cliente/registroPedidos');
});

router.get('/registroContratos', function(req, res, next) {
  res.render('Cliente/registroContratos');
});

router.get('/registroFacturas', function(req, res, next) {
  res.render('Cliente/registroFacturas');
});




module.exports = router;
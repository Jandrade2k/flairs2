const express = require('express');
const routes = express.Router();


routes.get('/', (req,res) => {
  return res.json({
    teste: "okay",
    funciona: "sim!",
    message: "=D"
  });
});

module.exports = routes;
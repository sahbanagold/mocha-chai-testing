'use strict'
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var salesReport = require('../models/sales.js')


router.get('/sales', function(req, res, next) {
    saless.find({}, function(err, result) {
        res.json(result)
    })
});

router.post('/sales', function(req, res, next) {
  console.log(req.body);
    let newSalesReport = new saless({
      item_name: req.body.item_name,
      sales_amount: req.body.sales_amount,
      month: new Date().getMonth()+1,
      year: new Date().getYear()+1900,
      date: new Date().getDate(),
      createdAt: new Date(),
      lastUpdate: new Date()
    }).save(function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          console.log(result)
            res.json({
                succes: "ok",
                message: "add is succesful",
                data: result
            })
        }
    })
});

router.put('/sales/:id', function(req, res, next) {
    saless.update({
        _id: req.params.id
    }, {
      item_name: req.body.item_name,
      sales_amount: req.body.sales_amount,
      lastUpdate: new Date()
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          saless.findOne({_id: req.params.id},function(err2,result2){
            res.json({
                success: "ok",
                message: "update is successful",
                data:result2
            })
          })
        }
    })
});

router.delete('/sales/:id', function(req, res, next) {
    saless.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json({
                message: err
            })
        } else {
          saless.findOne({_id: req.params.id},function(err,result){})
            res.json({
                success: "ok",
                message: "delete is successful"
            })
        }
    })
})



module.exports = router;

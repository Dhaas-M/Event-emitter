const express = require('express');
const router = express.Router();
const path = require('path');
const data = {};
data.employee = require('../../data/employee.json');

router.route('/')
     .get((req, res) => {
        res.json(data.employee);
     })
     .post((req, res) => {
         res.json({
             "firstName":req.body.firstName,
             "role":req.body.role
         })
     })
     .put((req, res) => {
        res.json({
            "firstName":req.body.firstName,
            "role":req.body,role
        })
      .delete((req, res) => {
          res.json({"id": req.body.id})
      })

     });


router.route('/:id')
    .get((req,res) => {
        res.json({"id": req.params.id})
    })



module.exports = router;     
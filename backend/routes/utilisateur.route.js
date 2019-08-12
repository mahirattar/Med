const express = require('express');
const app = express();
const utilisateurRoute = express.Router();

// Utilisateur model
let Utilisateur = require('../models/Utilisateur');

// Calucule d'IMC
utilisateurRoute.route('/create').post((req, res, next) => {
  Utilisateur.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Utilisateurs
utilisateurRoute.route('/').get((req, res) => {
  Utilisateur.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single utilisateur
utilisateurRoute.route('/read/:id').get((req, res) => {
  Utilisateur.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update utilisateur
utilisateurRoute.route('/update/:id').put((req, res, next) => {
  Utilisateur.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete utilisateur
utilisateurRoute.route('/delete/:id').delete((req, res, next) => {
  Utilisateur.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = utilisateurRoute;
var express = require('express');
var router = express.Router();

/* Importar modelo movie y paquete mongoose */
var mongoose = require('mongoose');
var Movie = require('../models/movie.js');


/* GET movies listing. */
router.get('/', function(req, res, next) {
  Movie.find().sort('-year').exec(function(err, movies){
    if (err) res.status(500).send(err);
    else res.status(200).json(movies);
  })
  //res.send('Get all movies');
});

/* GET one movie identified by id. */
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function(err, movieinfo){
    if (err) res.status(500).send(err);
    else res.status(200).json(movieinfo);
  });
  //res.send('Get the movie ' + req.params.id);
});

/* POST a new movie. */
router.post('/', function(req, res, next) {
  Movie.create(req.body, function(err, movieinfo){
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
  // res.send('Post the movie with title ' + req.body.title);
});

/* PUT the movie. */
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
  //res.send('Put the movie ' + req.params.id);
});

/* DELETE a movie. */
router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndDelete(req.params.id, function(err, movieinfo){
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  });
  //res.send('Delete the movie ' + req.params.id);
});

module.exports = router;

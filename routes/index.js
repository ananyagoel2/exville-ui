var express = require('express');
var router = express.Router();



/*
    @home
    @GET
    @info: renders home page
 */
router.get('/', function(req, res, next) {
  //clear cookies if any present
  res.clearCookie("userId");
  //home Page
  res.render('home', {
    layout: 'layout',
    home: true,
    redirect: false
  });
});


/*
    @home
    @GET
    @info: rerenders home page with username in the signup name field
 */
router.get('/home/:userName', function(req, res, next) {
  res.render('home', {
    layout: 'layout',
    home: true,
    redirect: true,
    userName: req.params.userName,
    error: true,
    errorMessage: "Already signed up. Please login!"
  });
});


module.exports = router;

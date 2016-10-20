var express = require('express');
var ctrl = express.Router();


var users = [
  {
    email: "benguy@gmai.com",
    password: 'suchacoolguy'
  },
  {
    email:'crocodiledundee@gmail.com',
    password: 'thatsnawtaknife'
  },
  {
    email:'heyjesus@gmail.com',
    password:'password'
  }
];

function findUserById(id){
  var offsetIndex = id - 1;
  return users[offsetIndex];
}


ctrl.get('/', function(req, res, next) {
  res.json(users);
});

ctrl.get('/:id', function (req,res,next) {
  //console.log(req.params);
  var id = parseInt(req.params.id);
  if(typeof id === 'number'){
    res.json(findUserById(id))
  }
  
  res.json({
    message: 'user not found'
  });
});

module.exports = ctrl;

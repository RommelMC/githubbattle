var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); 
var User = mongoose.model('User');

module.exports = {
  index: function(req, res) {
    res.render('index');
  },

  setp1: function(req, res){
      var p1 = new User(req.body);
      req.session.p1 = p1;
      res.json(true); 
  },

  setp2: function(req, res){
      var p2 = new User(req.body);
      req.session.p2 = p2;
      res.json(true);
  },

  getp1: function(req, res){
    var p1 = new User(req.session.p1);
      p1.save(err => {
          if(err)
            console.log(err);
        res.json(req.session.p1);
      });
  },

  getp2: function(req, res){
      var p2 = new User(req.session.p2);
      p2.save(err => {
        if(err)
            console.log(err);
        res.json(req.session.p2);
        
      });
  },

  getranks: function(req, res){
      User.find({}, function(err, users){
        console.log("ALL");
        // console.log(err);
        console.log(users);
      });
      User.find({}).sort('-score').exec(function(err, users){
          console.log("asdfaadfa");
          console.log(users);
        res.json(users);
      });
  }

}

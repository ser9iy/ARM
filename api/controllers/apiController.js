

var mongoose = require('mongoose'),
  Club = mongoose.model('Clubs');

  

  
exports.list_all_clubs = function(req, res) {
  Club.find({}, function(err, club) {
    if (err)
      res.send(err);
    res.json(club);
  });
};




exports.create_a_club = function(req, res) {
  var new_club = new Club(req.body);
  new_club.save(function(err, club) {
    if (err)
      res.send(err);
    res.json(club);
  });
};


exports.read_a_club = function(req, res) {
  Club.findOne({'count':req.params.clubId}, function(err, club) {
    if (err)
      res.send(err);
    res.json(club);
  });
};


exports.update_a_club = function(req, res) {
  Club.findOneAndUpdate(req.params.clubId, req.body, {new: true}, function(err, club) {
    if (err)
      res.send(err);
    res.json(club);
  });
};


exports.delete_a_club = function(req, res) {


  Club.remove({
    _id: req.params.clubId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Club successfully deleted' });
  });
};
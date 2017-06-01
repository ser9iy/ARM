module.exports = function(app) {
  var clubsList = require('../controllers/apiController');


   
  // todoList Routes
  app.route('/clubs')
    .get(clubsList.list_all_clubs)
    .post(clubsList.create_a_club);


  app.route('/clubs/:clubId')
    .get(clubsList.read_a_club)
    .put(clubsList.update_a_club)
    .delete(clubsList.delete_a_club);
};
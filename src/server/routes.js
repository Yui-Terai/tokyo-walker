module.exports = (app, db) => {
  const locations = require('./controllers/locations')(db);

  app.get('/locations', locations.getAll);
};  
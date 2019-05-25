module.exports = (app, db) => {
  const locations = require('./controllers/locations')(db);

  app.get('/', locations.homeRequest)
  app.get('/locations', locations.getAll);
};  
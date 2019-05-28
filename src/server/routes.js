module.exports = (app, db) => {
  const locations = require('./controllers/locations')(db);

  // app.get('/locations', locations.getAll);
  app.get('/category/:name', locations.locationsInCategoryRequest);
  app.get('/lists/:id', locations.locationsInListRequest);
};

module.exports = (app, db) => {
  const locations = require('./controllers/locations')(db);

  // app.get('/locations', locations.getAll);
  app.get('/lists/:category', locations.listsRequest);
  app.get('/category/:name', locations.categoriesRequest);
  app.get('/subcategory/:id', locations.subcategoriesRequest);
  app.get('/show/location/:id', locations.selectedLocationRequest);
};

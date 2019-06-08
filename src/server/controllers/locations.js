module.exports = (db) => {
  // let getAll = (request, response) => {
  //   db.locations.getAll((error, locations) => {
  //     // queryResult contains pokemon data returned from the pokemon model
  //     if (error) {
  //       console.error('error getting pokemon', error);
  //       response.status(500);
  //       response.send('server error');
  //     } else {
  //       response.send({locations: locations});
  //     }
  //   });
  // };

  let listsRequest = (request, response) => {
    // console.log('params from request', request.params);
    db.locations.lists(request.params.category, (error, locations) => {
      if (error) {
        console.error('error at locationsRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({lists: locations});
        console.log('params from request', request.params);
      }
    });
  };

  let categoriesRequest = (request, response) => {
    // console.log('params from request', request.params);
    db.locations.categories(request.params.name, (error, locations) => {
      if (error) {
        console.error('error at categoriesRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({categories: locations});
        console.log('params from request', request.params);
      }
    });
  };

  let subcategoriesRequest = (request, response) => {
    db.locations.subcategories(request.params.id, (error, locations) => {
      if (error) {
        console.error('error at subcategoriesRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({subcategories: locations});
      }
    });
  };

  let selectedLocationRequest = (request, response) => {
    db.locations.selectedLocation(request.params.id, (error, locations) => {
      if (error) {
        console.error('error at selectedLocationRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({selectedLocation: locations});
      }
    });
  };

  return {
    // getAll,
    listsRequest,
    categoriesRequest,
    subcategoriesRequest,
    selectedLocationRequest
  };
};

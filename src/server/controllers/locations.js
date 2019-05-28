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

  let subcategoriesRequest = (request, response) => {
    // console.log('params from request', request.params);
    db.locations.subcategories((error, locations) => {
      if (error) {
        console.error('error at subcategoriesRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({subcategories: locations});
        console.log('params from request', request.params);
      }
    });
  };

  let locationsInCategoryRequest = (request, response) => {
    // console.log('params from request', request.params);
    db.locations.locationsInCategory(request.params.name, (error, locations) => {
      if (error) {
        console.error('error at locationsInListRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({locationsInCategory: locations});
        console.log('params from request', request.params);
      }
    });
  };

  let locationsInListRequest = (request, response) => {
    db.locations.locationsInList(request.params.id, (error, locations) => {
      if (error) {
        console.error('error at locationsInListRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({locationsInList: locations});
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
    subcategoriesRequest,
    locationsInCategoryRequest,
    locationsInListRequest,
    selectedLocationRequest
  };
};

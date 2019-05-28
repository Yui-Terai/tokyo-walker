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

  let locationsInCategoryRequest = (request, response) => {
    console.log('params from request', request.params);
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
    console.log('WE ARE IN LISTS REQUEST');
    db.locations.locationsInList(request.params.id, (error, locations) => {
      console.log('params from request', request.params.id);
      if (error) {
        console.error('error at locationsInListRequest: ', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({locationsInList: locations});
      }
    });
  };

  return {
    // getAll,
    locationsInCategoryRequest,
    locationsInListRequest
  };
};

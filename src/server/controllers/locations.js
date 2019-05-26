module.exports = (db) => {
  let getAll = (request, response) => {
    db.locations.getAll((error, locations) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({locations: locations});
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
        response.send({locations: locations});
      }
    });
  };

  // let homeRequest = (request, response) => {
  //   response.render('../../../Home/home');
  // };

  return {
    getAll,
    // homeRequest,
    locationsInListRequest
  };
};

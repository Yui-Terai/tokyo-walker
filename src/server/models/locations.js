module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope
  let getAll = (callback) => {
    dbPoolInstance.query('SELECT * from locations', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        callback(null, queryResult.rows);
      }
    });
  };

  let locationsInList = (params, callback) => {
    let query = `SELECT locations.id, locations.name, locations.jp_name, locations.img, locations.description, locations.address, locations.opening_hours, locations.fee, locations.website, locations.hotels_nearby, locations.latitude, locations.longitude FROM locations INNER JOIN list_locations ON (locations.id = list_locations.location_id) WHERE list_locations.list_id=${params}`;
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        callback(null, queryResult.rows);
      }
    });
  };

  // let home = (callback) => {
  //   dbPoolInstance.query((error, queryResult) => {
  //     if (error) {
  //       // invoke callback function with results after query has executed
  //       callback(error, null);
  //     } else {
  //       callback(null, queryResult.rows);
  //     }
  //   });
  // };

  return {
    getAll,
    locationsInList
  };
};

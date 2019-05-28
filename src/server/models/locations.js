module.exports = (dbPoolInstance) => {
  // // `dbPoolInstance` is accessible within this function scope
  // let getAll = (callback) => {
  //   dbPoolInstance.query('SELECT * from locations', (error, queryResult) => {
  //     if (error) {
  //       // invoke callback function with results after query has executed
  //       callback(error, null);
  //     } else {
  //       callback(null, queryResult.rows);
  //     }
  //   });
  // };

  let locationsInCategory = (params, callback) => {
    let query = `SELECT * FROM locations WHERE category ILIKE '%${params}%'`;
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, queryResult.rows);
      }
    });
  };

  let locationsInList = (params, callback) => {
    let query = `SELECT * FROM locations INNER JOIN list_locations ON (locations.id = list_locations.location_id) WHERE list_locations.list_id=${params}`;
    dbPoolInstance.query(query, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, queryResult.rows);
      }
    });
  };

  return {
    // getAll,
    locationsInCategory,
    locationsInList
  };
};

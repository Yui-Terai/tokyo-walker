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
  };
};

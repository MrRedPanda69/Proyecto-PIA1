

connection.query('SELECT * FROM mi_tabla', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });
  
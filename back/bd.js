const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'proyectointegrador.mysql.database.azure.com',
    user: 'root1',
    password:'123456m,',
    database:'proyecto_integrador',
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Conectado a la base de datos')

    }
)

connection.query('SELECT * FROM prueba', (err, results, fields) => {
    if (err) throw err;
    console.log(results[0].nombre);
  });
  
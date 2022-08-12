//1 iMPORTACIONES
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4003

//2 MIDDLEWARES
app.use(express.json());

//3. rutas
app.use("/api/users",require("./routes/users.routes"));
app.use('/api/peliculas',require('./routes/Peliculas.routes'));
app.use('/api/libros', require ('./routes/libros.routes'));

//4 servidor

app.listen(PORT, () => {
  console.log(`servidor  en linea ${PORT}`);
 
});

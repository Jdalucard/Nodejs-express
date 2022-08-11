//1 iMPORTACIONES
const express = require("express");
const app = express();
const PORT = 4002;

//2 MIDDLEWARES

app.use(express.json());

//3. rutas
app.use("/api/users",require("./routes/users.routes"));

//4 servidor

app.listen(PORT, () => {
  console.log(`servidor linea ${PORT}`);
});


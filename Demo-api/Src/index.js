const express = require("express");
const app = express();
const fs= require("fs");
const port = 4000;

app.use(express.json()); /* midle wer para poder ocupar rutas de body */

app.get("/", (req, res) => {
  res.send("Welcome");
});
/* ejercicio */ 
app.get("/body", (req, res) => {
fs.readFile(req.body.nombre, req.body.contenido, (err, data) => {
    if(err) console.log(err);

})
    res.json({
      'msg': 'Obteniendo elementos'
    });
  });

  app.post("/body", (req, res) => {
    fs.readFile(req.body.nombre, 'utf-8',(err, data) => {
        if(err) console.log(err);
        console.log(data)
    res.json({
        msg:'Creando elementos '
  })
});
});
app.get("/query", (req, res) => {
  res.json({
    nombre: req.query.nombre,
    apellido: req.query.apellido,
  });
  console.log("respuesta enviada");
});

app.get("/personal", (req, res) => {
  res.json({
    nombre: req.body.nombre,
  });
});

app.get("/:id", (req, res) => {
  res.json({ mesaje: req.params.id });
});
app.listen(port, () => {
  console.log("servidor activo");
});

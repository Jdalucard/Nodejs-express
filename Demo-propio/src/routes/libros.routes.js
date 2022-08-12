const { Router } =require("express");

const { obtenerLibro, crearLibro, actualizarLibro, eliminarLibro } = require(
'../controllers/libros.controller'
);




const router = Router();

router.get("/", obtenerLibro),
  router.post("/", crearLibro),
  router.put("/:idLibro", actualizarLibro);
router.delete("/idLibro", eliminarLibro);

module.exports = router;

const {Router}=require('express');

const {
    obtenerPeliculas,
    crearPeliculas,
    actualizarPelicula,
    borrarPelicula

}=require('../controllers/peliculas.controller');

const router=Router();

router.get('/',obtenerPeliculas);
router.post('/',crearPeliculas)
router.put('/:idPelicula',actualizarPelicula)
router.delete('/:idPelicula',borrarPelicula)

module.exports = router;
   
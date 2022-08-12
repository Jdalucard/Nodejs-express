const { peliculas } = require("../database/db");
const { v4: uuid } = require("uuid");

const obtenerPeliculas = (req, res) => {
  return res.json({
    status: true,
    msg: "peliculas obtenidas",
    data: peliculas,
  });
};

const crearPeliculas = (req, res) => {
  const { title, year, price } = req.body;

  const pelicula = {
    id: uuid(),
    title: title,
    year: year,
    price: price,
  };
  peliculas.push(pelicula);

  return res.json({
    status: true,
    msg: "Pelicula Creada",
    data: pelicula,
  });
};

const actualizarPelicula = (req, res) => {
  const { idPelicula } = req.params;
  const { title, year, price } = req.body;

  const actualizar = peliculas.find((pelicula) => {
    return pelicula.id === idPelicula;
  });
  actualizar.title = title;
  actualizar.year = year;
  actualizar.price = price;

  return res.json({
    ok: true,
    msg: "Pelicula actulizada ",
    data: actualizar,
  });
};

const borrarPelicula = (req, res) => {
  const { idPelicula } = req.params;

  const eliminarPelicula = peliculas.find((pelicula) => {
    return pelicula.id === idPelicula;
  });
  peliculas.splice(peliculas.indexOf(eliminarPelicula),1)
  
  return res.json({
    ok: true,
    msg: "Pelicula eliminada ",
    data: eliminarPelicula,
  })

};

module.exports = {
  obtenerPeliculas,
  crearPeliculas,
  actualizarPelicula,
  borrarPelicula,
};

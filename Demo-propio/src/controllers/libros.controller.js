const {libros} =require ('../database/db')
const { v4: uuid}=require ('uuid')

const obtenerLibro=(req,res)=>{
    return res.json({
        status: true,
        msg: "Libros   obtenidos",
        data:libros,
    } )
}
const crearLibro=(req,res)=>{
const {title,year,autor} =req.body;
    
const libro={
    id: uuid(),
    title:title,
    year:year,
    autor :autor
}
libros.push(libro);

 return res.json({
    status:true,
    msg: 'Libro creado ',
    data:libro
 })

}

const actualizarLibro=(req,res)=>{
const {idLibro}=req.params
const { title,year,autor } = req.body;

const actualizar=libros.find((libro)=>{
    return libro.id=== idLibro

});

actualizar.title=title;

actualizar.year=year;

actualizar.autor=autor;

    return res.json({
        status:true,
        msg: 'Libro actualizado',
        data:actualizar
    })
}

const eliminarLibro=(req,res)=>{
const {idLibro}=req.params;

const borrarLibro=libros.find((libro)=>{
    return libro.id===idLibro
});
libros.splice(libros.indexof(borrarLibro),1);

return res.json({
    status:true,
    msg: 'Libro eliminado',
    data:borrarLibro
})
}

module.exports={
    obtenerLibro,
    crearLibro,
    actualizarLibro,
    eliminarLibro
}
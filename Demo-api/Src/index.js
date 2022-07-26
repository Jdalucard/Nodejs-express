const express = require('express');
const app = express();
const port= 4000;

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.get('/query', (req,res)=>{
    res.json({
         nombre: req.query.nombre,
         apellido: req.query.apellido,
        
        });

        console.log('respuesta enviada');
});

app.get('/:id', (req, res) => {
    res.json({mesaje: req.params.id})
});
app.listen(port,()=>{
    console.log('servidor activo')
})


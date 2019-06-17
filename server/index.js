require('./config/config');
var express = require('express');
var app = express();


const body_parse = require('body-parser');


//middleware
app.use(body_parse.urlencoded({ extended: false }));
app.use(body_parse.json());

//URL LOGIN
/* 
 *Email
 *Password  
 *Generar JWT
    
    ** Retornara
        *Un JWT
        *Nombre Usuario
 */
app.get('/:id', function(req, res) {
    var id = req.params.id;

    /*     res.send(`El PARAMETRO DEL URL ES ${id}`)
     */
    res.json({
        id
    })
});
app.post('/Login', function(req, res) {
    var data = req.body;

    if (data.email === undefined) {
        res.status(400).json(
            data_return = {
                'exito': false,
                'mensaje': 'El Email es necesario'
            })

    } else {
        res.json({
            data: data
        });
    }
    //var id = req.params.id;

});

app.listen(process.env.PORT, function() {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});
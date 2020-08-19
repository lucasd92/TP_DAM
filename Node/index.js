var express = require('express');
const cors = require('cors');
var app = express();
var PORT = 3000;
//ruteo dispositivo
var routerDisp = require('./routes/dispositivo');
//ruteo dispositivo
var routerMedicion = require('./routes/medicion');
//ruteo riego
var routerRiego = require('./routes/riego');

var corsConfig={ origin: '*', optionSucessStatus:200 };
app.use(cors(corsConfig));

app.use(express.json());

app.use('/api/dispositivo', routerDisp);

app.use('/api/medicion', routerMedicion);

app.use('/api/riego', routerRiego);

app.listen(PORT, function(req, res) {
    console.log("API Funcionando ");
});
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

//Setting template engine
app.set('view engine', 'ejs');

// Setear la carpeta public para archivos estaticos
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'piratas en el mapa' }));
app.use(cookieParser());

app.listen('3000', () => console.log('Servidor ejecutando en puerto 3000'));

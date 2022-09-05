require('./models/db');

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const employeeController = require('./controllers/employeeController');
const bodyParser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + '/views/layouts/', 
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'hbs');

app.listen(3000, ()=>{
    console.log('Express server started at port: 3000');
});

app.use('/employee', employeeController);
var express = require('express');
var path = require('path');

var app = module.exports = express();

const PORT = 3000;

app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

var users = [
  { name: 'David', email: 'david@admin.com' },
  { name: 'Carlos', email: 'carlos@admin.com' },
  { name: 'Angel', email: 'angel@admin.com' }
];

app.get('/', function(req, res){
  res.render('users', {
    users: users,
    title: "Ejemplo EXPRESSJS",
    header: "Usuarios"
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(PORT);
  console.log('Servidor iniciado en el puerto: ' + PORT);
}
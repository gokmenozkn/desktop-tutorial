var main = require('./controllers/main');
var handlebars = require('express-handlebars');

module.exports = {
  getFunc(app) {
    app.get('/', main.home);
    app.get('/about', main.about);
  },
  viewEngine(app) {
    app.engine('handlebars', handlebars());
    app.set('view engine', 'handlebars');
  }
}
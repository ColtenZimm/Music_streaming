require ("fs")
require ("dotenv").config()
const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// Define a route for the root URL
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Define a route for the /api endpoint
// app.get('/api', (req, res) => {
//   const data = {
//     message: 'This is your API response',
//     timestamp: new Date().toISOString()
//   };

//   res.json(data);
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



// (document).ready(function() {

//     console.log('JS is connected to HTML, and DOM is ready!');

//   var deezerSearch 
    
// })

// var myTemplate = `
// This is a template
// My favorite template engine is: {{fav}}
// My favorite kind of cake is: {{cake}}
// `
// var templateResult = Sqrl.Render(myTemplate, {
//   fav: "Squirrelly", cake: "Chocolate"
// })
// console.log(templateResult)                        
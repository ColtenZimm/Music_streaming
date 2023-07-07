require ("fs")
require ("dotenv").config()
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the /api endpoint
app.get('/api', (req, res) => {
  const data = {
    message: 'This is your API response',
    timestamp: new Date().toISOString()
  };

  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(document).ready(function() {

    console.log('JS is connected to HTML, and DOM is ready!');

  var deezerSearch 
    
})

var myTemplate = `
This is a template
My favorite template engine is: {{fav}}
My favorite kind of cake is: {{cake}}
`
var templateResult = Sqrl.Render(myTemplate, {
  fav: "Squirrelly", cake: "Chocolate"
})
console.log(templateResult)                        
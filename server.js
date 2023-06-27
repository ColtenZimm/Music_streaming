require ("fs")
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
//This is a template
//My favorite template engine is: Squirrelly
//My favorite kind of cake is: Chocolate
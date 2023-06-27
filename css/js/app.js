fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/13", {
"method": "GET",
"headers": {
"x-rapidapi-host": "<your host here>",
"x-rapidapi-key": "<your key here>"
}
})
.then(response => {
console.log(response);
})
.catch(err => {
console.error(err);
});
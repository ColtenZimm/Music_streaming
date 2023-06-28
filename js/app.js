
const fetch = require('node-fetch-commonjs');



async function APICall(){


const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/weezer';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dd0fe3374cmsh25d1a923b8470a6p1a3bb6jsn33e454cc15fd',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

};

APICall()
// async function APICall() {
//     try {
//         const request = await fetch ('https://api.deezer.com/artist/27')
//         const data = await request.json()
//         console.log(data);
//     }catch(err) {
//         console.error(err)
//     }
// };

// APICall()
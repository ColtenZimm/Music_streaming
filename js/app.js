
const fetch = require('node-fetch-commonjs');

const key = process.env.API_KEY



async function APICall(){


const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/weezer';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': key,
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
let btn 	= document.querySelector('#button');
let city 	= document.querySelector('#city');
let temp 	= document.querySelector('#temp');

function getWeather() {
	const headers = {
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
		'X-RapidAPI-Key': '26ff2bc868msh56dcb1b15969b20p1912abjsnc6779525f22d',
	};
	let apiUrl = 'https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%22imperial%22&q=Sioux+Falls%2Cusa'
	axios.get(apiUrl, {
		headers
	}).then(function (response) {	
		currentWeather(response.data);
	})
}

function currentWeather(data) {
	console.log(data);
	var k = data.main.temp;
	var f = ((k-273.15)*1.8)+32;
	city.innerText = data.name;
	temp.innerText = f;
}

btn.addEventListener('click', getWeather);
const sub = document.querySelector("#submit");
const searchcity = document.querySelector("#searchcity");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a18e1be92msh2378f1108b89950p1e1034jsn2cf8b8d3f734',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
     
    console.log(response);
	cityname.innerText=city;
    cityname1.innerText=city;
  //  icon.src=response.current.condition.icon;
    temp.innerText=response.temp;
    max_temp.innerText=response.max_temp;
    min_temp.innerText=response.min_temp;
    sunrise.innerText=response.sunrise;
    sunset.innerText=response.sunset;
    cloud_pct.innerText=response.cloud_pct;
    feels_like.innerText=response.feels_like;
    humidity.innerText=response.humidity;
    wind_degrees.innerText=response.wind_degrees;
    wind_speed.innerText=response.wind_speed;
    })
    
}

getweather("Meerut"); 


sub.addEventListener("click", change);
function change(e){
      e.preventDefault();
      
        target = searchcity.value;
      
        getweather(target);
      }
   

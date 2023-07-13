console.log("Hello, world!");


// const deg_ = document.getElementById('deg');
// const sunrise = document.getElementById('sunrise');
// const sunset = document.getElementById('sunset');

const c_tem = document.getElementById('c-temprature');
const weather_disc = document.getElementById('weather-disc');
const weather_disc2 = document.getElementById('weather-disc2');
const area = document.getElementById('location');
const date_ = document.getElementById('date');
const speed_ = document.getElementById('Wind');
const speed_2 = document.getElementById('Wind2');
const humidity = document.getElementById('Humadity');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('Visibility');
const humidity2 = document.getElementById('Humadity2');
const pressure2 = document.getElementById('pressure2');
const visibility2 = document.getElementById('Visibility2');
const cityInput = document.getElementById('city-input');
const searchbutton = document.getElementById('search');
const cityInput2 = document.getElementById('city-input2');
const searchbutton2 = document.getElementById('search2');
const islamabad = document.getElementById('islamabad');
const  london = document.getElementById('london');
const tokyo = document.getElementById('tokyo');
const bg_img = document.getElementById('bg-img');
const loading = document.getElementById('loading');
const m_icon = document.getElementById('Main-icon');
const b_icon = document.getElementById('bar-icon');


const apiKey = '1a4bb6d2337db0f0a4b8bd76f05a61fa';


const getWeatherData = (city) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try{

        loading.className = "container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "

        return fetch(apiUrl).then((response)=>{

            loading.className = "d-none container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "

            if(!response.ok){
                console.log("Error in fatchin data !");
            }
    
            return response.json();
    
            }).catch((error)=>{

                loading.className = "d-none container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "

                    console.log(error);
            });
    }catch(error){
        throw (error);
    }

     
}


function updateWeatherData(weatherData) {

    loading.className = "container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "


    try{

        if(weatherData.weather[0].main === "Rain" ){

            bg_img.style.backgroundImage = "url('images/Rain.gif')"
            m_icon.className = "fa-solid fa-cloud-rain fa-2xl text-light";
            b_icon.className = "fa-solid fa-cloud-rain fa-lg me-2";
    
        }else if(weatherData.weather[0].main === "Clouds" ){

            bg_img.style.backgroundImage = "url('images/Cloud.gif')"
            m_icon.className = "fa-solid fa-cloud fa-2xl text-light";
            b_icon.className = "fa-solid fa-cloud fa-lg me-2";
    
        }else if(weatherData.weather[0].main === "Clear" || weatherData.weather[0].main === "sunny" ){
    
            bg_img.style.backgroundImage = "url('images/Sunny.gif')"
            m_icon.className = "fa-solid fa-cloud-sun fa-2xl text-light";
            b_icon.className = "fa-solid fa-cloud-sun fa-lg me-2";
    
        }else if(weatherData.weather[0].main === "Smoke" || weatherData.weather[0].main === "Haze" ){
    
            bg_img.style.backgroundImage = "url('images/Smoke.gif')"
            m_icon.className = "fa-solid fa-smog fa-2xl text-light";
            b_icon.className = "fa-solid fa-smog fa-lg me-2";
    
        }

        c_tem.innerHTML = Math.round(weatherData.main.temp) + `&deg;C`;
        weather_disc.innerHTML = weatherData.weather[0].main;
        weather_disc2.innerHTML = weatherData.weather[0].main;
        area.innerText = " "+" "+weatherData.name;
        date_.innerHTML = " "+" "+new Date().toLocaleDateString();
        speed_2.innerHTML = "Wind "+weatherData.wind.speed+"  deg";
        speed_.innerHTML = "Wind "+weatherData.wind.speed+"  deg";
        humidity.innerHTML = "Humadity  "+weatherData.main.humidity+" %";
        pressure.innerHTML = "Pressure  "+weatherData.main.pressure+" hPa";
        visibility.innerHTML ="Visibility "+ weatherData.visibility+" Km";
        humidity2.innerHTML = "Humadity  "+weatherData.main.humidity+" %";
        pressure2.innerHTML = "Pressure  "+weatherData.main.pressure+" hPa";
        visibility2.innerHTML ="Visibility "+ weatherData.visibility+" Km";

        loading.className = "d-none container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "


    }catch(error){
        
        throw ("error in Updating Data " + error);
    
        loading.className = "d-none container-fluid border h-100 w-100 bg-transparent fixed-top d-flex align-items-center justify-content-center  "

    }
  
}


islamabad.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeatherData("islamabad")
    .then(weatherData => {
    updateWeatherData(weatherData);
    cityInput.value = "";
    cityInput2.value = "";
    })
    .catch(error => {
    console.log(error);})
});

tokyo.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeatherData("tokyo")
    .then(weatherData => {
    updateWeatherData(weatherData);
    cityInput.value = "";
    cityInput2.value = "";
    })
    .catch(error => {
    console.log(error);})
});

london.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeatherData("london")
    .then(weatherData => {
    updateWeatherData(weatherData);
    cityInput.value = "";
    cityInput2.value = "";
    })
    .catch(error => {
    console.log(error);})
});



function searchCity(event) {
  event.preventDefault();

  console.log(event.target.name)

  let city = "";

  if(event.target.name === "searchbtn2"){
     city = cityInput2.value.trim();
  }if(event.target.name === "searchbtn"){
     city = cityInput.value.trim();
  }

  
  if (city) {
    getWeatherData(city)
      .then(weatherData => {
        updateWeatherData(weatherData);
        cityInput.value = "";
        cityInput2.value = "";
      })
      .catch(error => {
        console.log(error);
        alert("City Not Found");
    cityInput.value = "";
    cityInput2.value = "";
      });
  }

}

searchbutton.addEventListener('click', searchCity);
searchbutton2.addEventListener('click',searchCity);



try{
    const weather = getWeatherData("karachi");
    weather.then((data)=>{
        updateWeatherData(data)
        console.log(data);
    }).catch((error)=>{
        console.log("Error in fatching");
    })
}catch(error){
    throw (error)
}




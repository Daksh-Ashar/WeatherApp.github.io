var Splash = document.querySelector('.Splash');
var SubmitBtn = document.querySelector('#Submit');


/*----------splash screen-------*/
function SplashScreen(){
  setTimeout( ()=>{
       Splash.classList.replace('Splash','Display-none');
  },1000);
};


//---------Execution of body on submit button pressed------------------//
SubmitBtn.addEventListener('click', function Exe(e){
e.preventDefault();

var CityValue = document.getElementById("CityName").value; 


const proxy = 'https://cors-anywhere.herokuapp.com/';

fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?q=${CityValue}&appid=5ea2c4c446fed1350bd095094f76e5f8`)
.then(response => response.json())
.then(data =>{

//-----------Grabbing all body element to display result-----------------//
var Body_city = document.querySelector('.City_Body');
var Body_Temp = document.querySelector('.Temp_Body');
var Body_Desc = document.querySelector('.Desc_Body');
var Body_Icon = document.querySelector('#Body_Icon');
var B_Details = document.querySelector('.Details');



//----------Getting Values from api---------------//
var  CityVal   = data['name'];                                        //---Get the name of the city----//
var Kelvin_Temp = data['main']['temp'];                               //---Get the Temp of the city----//
var Description = data['weather'][0]['description'];                  //---Get the weather Description of the city----//
var id = data['weather'][0]['id'];                                    //---Get the id No for Logo changes----//


//-----------Convert Temperature from kelvin to degree------------//
var cel_Temp = Kelvin_Temp -  273.15 ;


//-------------chnage body content with the result-------------//
Body_city.innerHTML = CityVal;
Body_Temp.innerHTML = `${cel_Temp.toPrecision(2)} °C`;
Body_Desc.innerHTML =  `${Description}`;


//-------change body display property on load--------//
B_Details.style.display = 'block';

//--------------------To change icon -------------------------//
          if(id<250)
          {
            Body_Icon.src = 'Images/thunderstorm-clouds.svg';
          }
          else if(250 < id < 330)
          {
            Body_Icon.src = 'Images/Drizzle.svg';
          }
          else if(499 < id < 532)
          {
            Body_Icon.src = 'Images/rain.svg';
          }
          else if(599 < id < 623)
          {
            Body_Icon.src = 'Images/Snow.svg';
          }
          else if(650 < id <= 800)
          {
            Body_Icon.src = 'Images/sun.svg';
          }
          else
          {
            Body_Icon.src = 'Images/Cloudy.svg';
          }

}).catch(function(error){
  setTimeout(()=>{
    document.querySelector('.error').style.display = 'block';
  },3000);
    
//-------change body display property on load--------//
    document.querySelector('.Details').style.display = 'none';
})

document.querySelector('.error').style.display = 'none';

}
);


window.addEventListener('load', e => {
  //new WeatherApp();
  registerSW(); 
});



async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('./sw.js'); 
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.'); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}


self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});



async function cacheFirst(req) {
  const cache = await caches.open(cacheName); 
  const cachedResponse = await cache.match(req); 
  return cachedResponse || fetch(req); 
}
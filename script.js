const a = "1b67615db12d368802bacd9b9da4b0a4";

// document.addEventListener('DOMContentLoaded', ()=>{
//     const API = 'https://api.openweathermap.org/data/2.5/weather?q=${muzaffarpur}&appid=${1b67615db12d368802bacd9b9da4b0a4}&units=metric'

//     fetch(API).then(response=>{
//         console.log(response.json());
//         return response.json()
//     })
// })


// const locationsearch = document.getElementById('locationsearch')
// const locationbtn = document.getElementById('locationbtn')
// const API = 'https://api.openweathermap.org/data/2.5/weather?q=${muzaffarpur}&appid=${1b67615db12d368802bacd9b9da4b0a4}&units=metric'

// locationbtn.addEventListener('click', ()=>{
//     if(locationsearch.value == ''){
//         alert('Please enter a location')
//     }else{
//         fetch(API).then((Response)=>{
//             console.log(Response.data);
//             return Response.json()
//         })
//     }
// })




const locationsearch = document.getElementById('locationsearch');
const locationbtn = document.getElementById('locationbtn');
const weatherinfo = document.getElementById('weatherinfo');
const API_KEY = '1b67615db12d368802bacd9b9da4b0a4';
const animateweather = document.getElementById('animateweather')



locationbtn.addEventListener('click', () => {
    animateweather.classList.remove('hidden');
    // console.log(animateweather);
    const location = locationsearch.value;
    if (location === '') {
        weatherinfo.innerHTML = `<p class="text-red-500 font-semibold text-2xl">Please write a Input</p>`;
    } else {
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        fetch(API)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Incorrect Input ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                animateweather.classList.add('hidden');
                weatherinfo.innerHTML = `
                    
                   <div class="bg-white/20 backdrop-blur-[10px] p-6 rounded-lg shadow-lg max-w-lg w-full text-white">
        <div class="text-center mb-4">
            <h2 class="text-2xl font-bold" id="cityName">${data.name}</h2>
        </div>
        <div class="flex lg:flex-row md:flex-row flex-col items-center justify-between mb-4">
            <div>
                <span class="text-6xl font-bold" id="temperature">${data.main.temp}°C</span>
                <span class="text-white font-semibold" id="weatherDescription">${data.weather[0].description}</span>
            </div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon" class="w-20 h-20">
        </div>
        <div class="space-y-2">
            <div class="flex justify-between">
                <span class="text-white">Humidity:</span>
                <span class="text-gray-100 font-medium" id="humidity">${data.main.humidity}%</span>
            </div>
            <div class="flex justify-between">
                <span class="text-white">Wind Speed:</span>
                <span class="text-gray-100 font-medium" id="windSpeed">${data.wind.speed} m/s</span>
            </div>
            <div class="flex justify-between">
                <span class="text-white">Feels Like:</span>
                <span class="text-gray-100 font-medium" id="feelsLike">${data.main.feels_like}°C</span>
            </div>
        </div>
    </div>
                `;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                weatherinfo.innerHTML = `<p class="text-white font-semibold text-lg">Error fetching weather data: ${error.message}</p>`;
            });
    }
});













// const dataContainer = document.getElementById("datainter");

// const loadElement = document.createElement("div");
// loadElement.className = "loadingend";
// loadElement.innerHTML = `<div
//         class="loding2s border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
//       >
//         <div class="animate-pulse flex space-x-4">
//           <div class="rounded-full bg-slate-700 h-10 w-10"></div>
//           <div class="flex-1 space-y-6 py-1">
//             <div class="h-2 bg-slate-700 rounded"></div>
//             <div class="space-y-3">
//               <div class="grid grid-cols-3 gap-4">
//                 <div class="h-2 bg-slate-700 rounded col-span-2"></div>
//                 <div class="h-2 bg-slate-700 rounded col-span-1"></div>
//               </div>
//               <div class="h-2 bg-slate-700 rounded"></div>
//             </div>
//           </div>
//         </div>
//       </div>`;

// for (let i = 1; i <= 15; i++) {
//   dataContainer.appendChild(loadElement.cloneNode(true));
// }
// //   dataContainer.append(loadElement)

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       // console.log(response.json());
//       return response.json();
//     })
//     .then((data) => {
//     //   const loding2s = document.querySelectorAll(".loding2s");

//       const loadingElements = document.querySelectorAll(".loadingend");

      
//       data.forEach((element) => {
//         const postElement = document.createElement("div");
//         postElement.innerHTML = `<div id="inner-box" class="bg-blue-300 hover:bg-blue-600 hover:text-white p-4 rounded-lg transition duration-300 ease-in-out">
//             <h1 id="title" class="text-xl font-semibold mb-2"> <span class='font-bold'>${element.id}.</span> ${element.title}</h1>
//             <p id="body" class="">${element.body}</p>
//         </div>`;
//         // loding2s.forEach((loding2s) => {
//         //   loding2s.classList.add("hidden");
//         // });
//         loadingElements.forEach((el) => el.remove());
//         dataContainer.append(postElement);
//       });
//     })
//     .catch((error) => {
//       dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
//     });
// });

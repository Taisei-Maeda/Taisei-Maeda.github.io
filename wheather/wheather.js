window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(".temperature-description");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");
  

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy ='https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/1d7d7f91dad12f60aaabac2f796ba919/${lat},${long}`;

      fetch(api)
        .then(response => {
          return response.json();
      })
        .then(data => {
          const {temperature, summary, icon} = data.currently;

          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          let celsius = (temperature - 32) * (5 / 9);

          setIcons(icon, document.querySelector(".icon"));

          //華氏から摂氏
          temperatureSection.addEventListener('click', () => {
            if(temperatureSpan.textContent === "F"){
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
      });
    }); 
  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});


// You can add the si units options to your parameters in the request. This should give you back temperature in celsius. For example:

// const https = require('https');
// var body = "";

// const url = "https://api.darksky.net/forecast/your-key-goes-here/53.34929607,-6.26036167?units=si"

// var req = https.request(url, (res) => {
//       res.on('data', (d) => {
//       body += d;
//     });

//     res.on('end', () => {
//         var data = JSON.parse(body);
//         console.log(data.currently.temperature);
//     });
// });

// req.on('error', (e) => {
//   console.error(e);
// });

// req.end();
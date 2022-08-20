
const d01 = new Date();
let mouth = '0' + d01.getMonth();
let day = '0' + d01.getDate();
window.p1.innerHTML= day.slice(-2) + ":"+mouth.slice(-2) + ":" + d01.getFullYear();
var day1;
var lat;
var lon;
GetInfo()
function GetInfo(){
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = newName.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${newName.value}&appid=147047276dca13f394bb9acfab77f82d`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
    
           console.log(data)
        const weathericon = data.weather[0].icon
        document.getElementById("cloud1").src=`http://openweathermap.org/img/wn/${weathericon}.png`
       window.temp1.textContent= Math.round(data.main.temp) + "°"+"C"
       let unix = data.sys.sunrise
       let d02 = new Date(unix*1000);
       window.sunrise.textContent =  d02.getHours()+":"+d02.getMinutes()
       let unix2 = data.sys.sunset
       let d03 = new Date(unix2*1000);
       window.sunset.textContent =  d03.getHours()+":"+d02.getMinutes()
      window.statusweather.textContent=data.weather[0].main;
      window.realfeel.textContent= Math.round(data.main.feels_like)+ "°"+"C";
      window.maxtemp.textContent =Math.round(data.main.temp_max)+ "°"+"C";
      window.mintemp.textContent = Math.round(data.main.temp_min)+ "°"+"C" ;
      lat = data.coord.lat
      lon = data.coord.lon
    
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (data2) {
      
          console.log(data2);
          let d02 = new Date(data2.hourly[1].dt * 1000);
          window.hourly_1.textContent = d02.getHours()+":00";
          let d03 = new Date(data2.hourly[2].dt * 1000);
          window.hourly_2.textContent = d03.getHours()+":00";
          let d04 = new Date(data2.hourly[3].dt * 1000);
          window.hourly_3.textContent = d04.getHours()+":00";
          let d05 = new Date(data2.hourly[4].dt * 1000);
          window.hourly_4.textContent = d05.getHours()+":00";
          let d06 = new Date(data2.hourly[5].dt * 1000);
          window.hourly_5.textContent = d06.getHours()+":00";
          document.getElementById("cloud2").src=`http://openweathermap.org/img/wn/${data2.hourly[0].weather[0].icon}.png`;
          document.getElementById("cloud3").src=`http://openweathermap.org/img/wn/${data2.hourly[1].weather[0].icon}.png`;
          document.getElementById("cloud4").src=`http://openweathermap.org/img/wn/${data2.hourly[2].weather[0].icon}.png`;
          document.getElementById("cloud5").src=`http://openweathermap.org/img/wn/${data2.hourly[3].weather[0].icon}.png`;
          document.getElementById("cloud6").src=`http://openweathermap.org/img/wn/${data2.hourly[4].weather[0].icon}.png`;
          document.getElementById("cloud7").src=`http://openweathermap.org/img/wn/${data2.hourly[5].weather[0].icon}.png`;
          window.forecasthourly_1.textContent = data2.hourly[0].weather[0].main;
          window.forecasthourly_2.textContent = data2.hourly[1].weather[0].main;
          window.forecasthourly_3.textContent = data2.hourly[2].weather[0].main;
          window.forecasthourly_4.textContent = data2.hourly[3].weather[0].main;
          window.forecasthourly_5.textContent = data2.hourly[4].weather[0].main;
          window.forecasthourly_6.textContent = data2.hourly[5].weather[0].main;
          window.temphourly_1.textContent = Math.round(data2.hourly[0].temp)+ "°"+"C"; 
          window.temphourly_2.textContent = Math.round(data2.hourly[1].temp)+ "°"+"C"; 
          window.temphourly_3.textContent = Math.round(data2.hourly[2].temp)+ "°"+"C"; 
          window.temphourly_4.textContent = Math.round(data2.hourly[3].temp)+ "°"+"C"; 
          window.temphourly_5.textContent = Math.round(data2.hourly[4].temp)+ "°"+"C"; 
          window.temphourly_6.textContent = Math.round(data2.hourly[5].temp)+ "°"+"C"; 
          window.Real_feel1.textContent = Math.round(data2.hourly[0].feels_like) + "°"+"C";
          window.Real_feel2.textContent = Math.round(data2.hourly[1].feels_like) + "°"+"C";
          window.Real_feel3.textContent = Math.round(data2.hourly[2].feels_like) + "°"+"C";
          window.Real_feel4.textContent = Math.round(data2.hourly[3].feels_like) + "°"+"C";
          window.Real_feel5.textContent = Math.round(data2.hourly[4].feels_like) + "°"+"C";
          window.Real_feel6.textContent = Math.round(data2.hourly[5].feels_like) + "°"+"C";    
          window.Wind_1.textContent = Math.round(data2.hourly[0].wind_speed) + " ESE";
          window.Wind_2.textContent = Math.round(data2.hourly[1].wind_speed) + " ESE";
          window.Wind_3.textContent = Math.round(data2.hourly[2].wind_speed) + " ESE";
          window.Wind_4.textContent = Math.round(data2.hourly[3].wind_speed) + " ESE";
          window.Wind_5.textContent = Math.round(data2.hourly[4].wind_speed) + " ESE";
          window.Wind_6.textContent = Math.round(data2.hourly[5].wind_speed) + " ESE";

          let d07 = [new Date(data2.daily[0].dt * 1000),new Date(data2.daily[1].dt * 1000),new Date(data2.daily[2].dt * 1000,),new Date(data2.daily[3].dt * 1000),new Date(data2.daily[4].dt * 1000)];
          let dataDay = ["","","",""];
          let dataMouth = new Date()
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          for(let i=0;i<5;i++){
           if(d07[i].getDay() == 0){
            dataDay[i] = "Sunday";
           }
           if(d07[i].getDay() == 1){
            dataDay[i] = "Monday";
           }
           if(d07[i].getDay() == 2){
            dataDay[i] = "Tuesday";
           }
           if(d07[i].getDay() == 3){
            dataDay[i] = "Wednesday";
           }
           if(d07[i].getDay() == 4){
            dataDay[i] = "Thursday";
           }
           if(d07[i].getDay() == 5){
            dataDay[i] = "Friday";
           }
           if(d07[i].getDay() == 6){
            dataDay[i] = "Saturday";
           }
          }
          day1 =dataDay[0]
         window.dataID_1.textContent = dataDay[1];
         window.dataID_2.textContent = dataDay[2];
         window.dataID_3.textContent = dataDay[3];
         window.dataID_4.textContent = dataDay[4];
         window.dataInfo_0.textContent = monthNames[dataMouth.getMonth()]+ " " + d07[0].getDate().toString();
         window.dataInfo_1.textContent = monthNames[dataMouth.getMonth()]+ " " + d07[1].getDate().toString();
         window.dataInfo_2.textContent = monthNames[dataMouth.getMonth()]+ " " + d07[2].getDate().toString();
         window.dataInfo_3.textContent = monthNames[dataMouth.getMonth()]+ " " + d07[3].getDate().toString();
         window.dataInfo_4.textContent = monthNames[dataMouth.getMonth()]+ " " + d07[4].getDate().toString();
         document.getElementById("cloudFor_0").src=`http://openweathermap.org/img/wn/${data2.daily[0].weather[0].icon}.png`;
         document.getElementById("cloudFor_1").src=`http://openweathermap.org/img/wn/${data2.daily[1].weather[0].icon}.png`;
         document.getElementById("cloudFor_2").src=`http://openweathermap.org/img/wn/${data2.daily[2].weather[0].icon}.png`;
         document.getElementById("cloudFor_3").src=`http://openweathermap.org/img/wn/${data2.daily[3].weather[0].icon}.png`;
         document.getElementById("cloudFor_4").src=`http://openweathermap.org/img/wn/${data2.daily[4].weather[0].icon}.png`;
         window.tempFor_0.textContent = Math.round(data2.daily[0].temp.day)+ "°"+"C"; 
         window.tempFor_1.textContent = Math.round(data2.daily[1].temp.day)+ "°"+"C"; 
         window.tempFor_2.textContent = Math.round(data2.daily[2].temp.day)+ "°"+"C"; 
         window.tempFor_3.textContent = Math.round(data2.daily[3].temp.day)+ "°"+"C"; 
         window.tempFor_4.textContent = Math.round(data2.daily[4].temp.day)+ "°"+"C"; 
         
        })
    })
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function click1(){
    document.getElementById("div_1").style.background = "white";
    document.getElementById("div_2").style.background = "whitesmoke";
    document.getElementById("div_3").style.background = "whitesmoke";
    document.getElementById("div_4").style.background = "whitesmoke";
    document.getElementById("div_5").style.background = "whitesmoke";
    window.dayiii.textContent = day1
fetch(`https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (dataDay1) {
                  let h1 = new Date(dataDay1.list[0].dt * 1000)
                  window.d1.textContent = h1.getHours()+":00";
                  let h2 = new Date(dataDay1.list[1].dt * 1000)
                  window.d2.textContent = h2.getHours()+":00";
                  let h3 = new Date(dataDay1.list[2].dt * 1000)
                  window.d3.textContent = h3.getHours()+":00";
                  let h4 = new Date(dataDay1.list[3].dt * 1000)
                  window.d4.textContent = h4.getHours()+":00";
                  let h5 = new Date(dataDay1.list[4].dt * 1000)
                  window.d5.textContent = h5.getHours()+":00";
                  let h6 = new Date(dataDay1.list[5].dt * 1000)
                  window.d6.textContent = h6.getHours()+":00";
                  let h7 = new Date(dataDay1.list[6].dt * 1000)
                  window.d7.textContent = h7.getHours()+":00";
                       console.log(dataDay1.list[0].weather[0].icon)
                  document.getElementById("img1").scr = `http://openweathermap.org/img/wn/${dataDay1.list[0].weather[0].icon}.png`;
             
                  window.f1.textContent = dataDay1.list[0].weather[0].main
                  window.f2.textContent = dataDay1.list[1].weather[0].main
                  window.f3.textContent = dataDay1.list[2].weather[0].main
                  window.f4.textContent = dataDay1.list[3].weather[0].main
                  window.f5.textContent = dataDay1.list[4].weather[0].main
                  window.f6.textContent = dataDay1.list[5].weather[0].main
                  window.f7.textContent = dataDay1.list[6].weather[0].main

                  window.t1.textContent = Math.round(dataDay1.list[0].main.temp - 273.15)+ "°"+"C"; 
                  window.t2.textContent = Math.round(dataDay1.list[1].main.temp - 273.15)+ "°"+"C"; 
                  window.t3.textContent = Math.round(dataDay1.list[2].main.temp - 273.15)+ "°"+"C"; 
                  window.t4.textContent = Math.round(dataDay1.list[3].main.temp - 273.15)+ "°"+"C"; 
                  window.t5.textContent = Math.round(dataDay1.list[4].main.temp - 273.15)+ "°"+"C"; 
                  window.t6.textContent = Math.round(dataDay1.list[5].main.temp - 273.15)+ "°"+"C"; 
                  window.t7.textContent = Math.round(dataDay1.list[6].main.temp - 273.15)+ "°"+"C"; 
                  
                  window.tf1.textContent = Math.round(dataDay1.list[0].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf2.textContent = Math.round(dataDay1.list[1].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf3.textContent = Math.round(dataDay1.list[2].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf4.textContent = Math.round(dataDay1.list[3].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf5.textContent = Math.round(dataDay1.list[4].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf6.textContent = Math.round(dataDay1.list[5].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf7.textContent = Math.round(dataDay1.list[6].main.feels_like - 273.15)+ "°"+"C"; 

                  document.getElementById("img1").src = `http://openweathermap.org/img/wn/${dataDay1.list[0].weather[0].icon}.png`
                  document.getElementById("img2").src = `http://openweathermap.org/img/wn/${dataDay1.list[1].weather[0].icon}.png`
                  document.getElementById("img3").src = `http://openweathermap.org/img/wn/${dataDay1.list[2].weather[0].icon}.png`
                  document.getElementById("img4").src = `http://openweathermap.org/img/wn/${dataDay1.list[3].weather[0].icon}.png`
                  document.getElementById("img5").src = `http://openweathermap.org/img/wn/${dataDay1.list[4].weather[0].icon}.png`
                  document.getElementById("img6").src = `http://openweathermap.org/img/wn/${dataDay1.list[5].weather[0].icon}.png`
                  document.getElementById("img7").src = `http://openweathermap.org/img/wn/${dataDay1.list[6].weather[0].icon}.png`
                  
      })
}
function click2(){
    document.getElementById("div_1").style.background = "whitesmoke";
    document.getElementById("div_2").style.background = "white";
    document.getElementById("div_3").style.background = "whitesmoke";
    document.getElementById("div_4").style.background = "whitesmoke";
    document.getElementById("div_5").style.background = "whitesmoke";
    window.dayiii.textContent = window.dataID_1.textContent
    fetch(`https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (dataDay2) {
                  console.log(dataDay2)
                  let h1 = new Date(dataDay2.list[7].dt * 1000)
                  window.d1.textContent = h1.getHours()+":00";
                  let h2 = new Date(dataDay2.list[8].dt * 1000)
                  window.d2.textContent = h2.getHours()+":00";
                  let h3 = new Date(dataDay2.list[9].dt * 1000)
                  window.d3.textContent = h3.getHours()+":00";
                  let h4 = new Date(dataDay2.list[10].dt * 1000)
                  window.d4.textContent = h4.getHours()+":00";
                  let h5 = new Date(dataDay2.list[11].dt * 1000)
                  window.d5.textContent = h5.getHours()+":00";
                  let h6 = new Date(dataDay2.list[12].dt * 1000)
                  window.d6.textContent = h6.getHours()+":00";
                  let h7 = new Date(dataDay2.list[13].dt * 1000)
                  window.d7.textContent = h7.getHours()+":00";

                  
                  
                  window.f1.textContent = dataDay2.list[7].weather[0].main
                  window.f2.textContent = dataDay2.list[8].weather[0].main
                  window.f3.textContent = dataDay2.list[9].weather[0].main
                  window.f4.textContent = dataDay2.list[10].weather[0].main
                  window.f5.textContent = dataDay2.list[11].weather[0].main
                  window.f6.textContent = dataDay2.list[12].weather[0].main
                  window.f7.textContent = dataDay2.list[13].weather[0].main

                  window.t1.textContent = Math.round(dataDay2.list[7].main.temp - 273.15)+ "°"+"C"; 
                  window.t2.textContent = Math.round(dataDay2.list[8].main.temp - 273.15)+ "°"+"C"; 
                  window.t3.textContent = Math.round(dataDay2.list[9].main.temp - 273.15)+ "°"+"C"; 
                  window.t4.textContent = Math.round(dataDay2.list[10].main.temp - 273.15)+ "°"+"C"; 
                  window.t5.textContent = Math.round(dataDay2.list[11].main.temp - 273.15)+ "°"+"C"; 
                  window.t6.textContent = Math.round(dataDay2.list[12].main.temp - 273.15)+ "°"+"C"; 
                  window.t7.textContent = Math.round(dataDay2.list[13].main.temp - 273.15)+ "°"+"C"; 

                  window.tf1.textContent = Math.round(dataDay2.list[7].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf2.textContent = Math.round(dataDay2.list[8].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf3.textContent = Math.round(dataDay2.list[10].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf4.textContent = Math.round(dataDay2.list[11].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf5.textContent = Math.round(dataDay2.list[12].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf6.textContent = Math.round(dataDay2.list[13].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf7.textContent = Math.round(dataDay2.list[14].main.feels_like - 273.15)+ "°"+"C"; 

                  document.getElementById("img1").src = `http://openweathermap.org/img/wn/${dataDay2.list[7].weather[0].icon}.png`
                  document.getElementById("img2").src = `http://openweathermap.org/img/wn/${dataDay2.list[8].weather[0].icon}.png`
                  document.getElementById("img3").src = `http://openweathermap.org/img/wn/${dataDay2.list[9].weather[0].icon}.png`
                  document.getElementById("img4").src = `http://openweathermap.org/img/wn/${dataDay2.list[10].weather[0].icon}.png`
                  document.getElementById("img5").src = `http://openweathermap.org/img/wn/${dataDay2.list[11].weather[0].icon}.png`
                  document.getElementById("img6").src = `http://openweathermap.org/img/wn/${dataDay2.list[12].weather[0].icon}.png`
                  document.getElementById("img7").src = `http://openweathermap.org/img/wn/${dataDay2.list[13].weather[0].icon}.png`
                })
}
function click3(){
    document.getElementById("div_1").style.background = "whitesmoke";
    document.getElementById("div_2").style.background = "whitesmoke";
    document.getElementById("div_3").style.background = "white";
    document.getElementById("div_4").style.background = "whitesmoke";
    document.getElementById("div_5").style.background = "whitesmoke";
    window.dayiii.textContent = window.dataID_2.textContent
    fetch(`https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (dataDay3) {
                  console.log(dataDay3)
                  let h1 = new Date(dataDay3.list[14].dt * 1000)
                  window.d1.textContent = h1.getHours()+":00";
                  let h2 = new Date(dataDay3.list[15].dt * 1000)
                  window.d2.textContent = h2.getHours()+":00";
                  let h3 = new Date(dataDay3.list[16].dt * 1000)
                  window.d3.textContent = h3.getHours()+":00";
                  let h4 = new Date(dataDay3.list[17].dt * 1000)
                  window.d4.textContent = h4.getHours()+":00";
                  let h5 = new Date(dataDay3.list[18].dt * 1000)
                  window.d5.textContent = h5.getHours()+":00";
                  let h6 = new Date(dataDay3.list[19].dt * 1000)
                  window.d6.textContent = h6.getHours()+":00";
                  let h7 = new Date(dataDay3.list[20].dt * 1000)
                  window.d7.textContent = h7.getHours()+":00";

                   
          

                  window.f1.textContent = dataDay3.list[14].weather[0].main
                  window.f2.textContent = dataDay3.list[15].weather[0].main
                  window.f3.textContent = dataDay3.list[16].weather[0].main
                  window.f4.textContent = dataDay3.list[17].weather[0].main
                  window.f5.textContent = dataDay3.list[18].weather[0].main
                  window.f6.textContent = dataDay3.list[19].weather[0].main
                  window.f7.textContent = dataDay3.list[20].weather[0].main

                  window.t1.textContent = Math.round(dataDay3.list[14].main.temp - 273.15)+ "°"+"C"; 
                  window.t2.textContent = Math.round(dataDay3.list[15].main.temp - 273.15)+ "°"+"C"; 
                  window.t3.textContent = Math.round(dataDay3.list[16].main.temp - 273.15)+ "°"+"C"; 
                  window.t4.textContent = Math.round(dataDay3.list[17].main.temp - 273.15)+ "°"+"C"; 
                  window.t5.textContent = Math.round(dataDay3.list[18].main.temp - 273.15)+ "°"+"C"; 
                  window.t6.textContent = Math.round(dataDay3.list[19].main.temp - 273.15)+ "°"+"C"; 
                  window.t7.textContent = Math.round(dataDay3.list[20].main.temp - 273.15)+ "°"+"C"; 

                  window.tf1.textContent = Math.round(dataDay3.list[14].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf2.textContent = Math.round(dataDay3.list[15].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf3.textContent = Math.round(dataDay3.list[16].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf4.textContent = Math.round(dataDay3.list[17].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf5.textContent = Math.round(dataDay3.list[18].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf6.textContent = Math.round(dataDay3.list[19].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf7.textContent = Math.round(dataDay3.list[20].main.feels_like - 273.15)+ "°"+"C"; 

                  document.getElementById("img1").src = `http://openweathermap.org/img/wn/${dataDay3.list[14].weather[0].icon}.png`
                  document.getElementById("img2").src = `http://openweathermap.org/img/wn/${dataDay3.list[15].weather[0].icon}.png`
                  document.getElementById("img3").src = `http://openweathermap.org/img/wn/${dataDay3.list[16].weather[0].icon}.png`
                  document.getElementById("img4").src = `http://openweathermap.org/img/wn/${dataDay3.list[17].weather[0].icon}.png`
                  document.getElementById("img5").src = `http://openweathermap.org/img/wn/${dataDay3.list[18].weather[0].icon}.png`
                  document.getElementById("img6").src = `http://openweathermap.org/img/wn/${dataDay3.list[19].weather[0].icon}.png`
                  document.getElementById("img7").src = `http://openweathermap.org/img/wn/${dataDay3.list[20].weather[0].icon}.png`
                  
      })
}
function click4(){
    document.getElementById("div_1").style.background = "whitesmoke";
    document.getElementById("div_2").style.background = "whitesmoke";
    document.getElementById("div_3").style.background = "whitesmoke";
    document.getElementById("div_4").style.background = "white";
    document.getElementById("div_5").style.background = "whitesmoke";
    window.dayiii.textContent = window.dataID_3.textContent
    fetch(`https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (dataDay4) {
                  console.log(dataDay4)
                  let h1 = new Date(dataDay4.list[21].dt * 1000)
                  window.d1.textContent = h1.getHours()+":00";
                  let h2 = new Date(dataDay4.list[22].dt * 1000)
                  window.d2.textContent = h2.getHours()+":00";
                  let h3 = new Date(dataDay4.list[23].dt * 1000)
                  window.d3.textContent = h3.getHours()+":00";
                  let h4 = new Date(dataDay4.list[24].dt * 1000)
                  window.d4.textContent = h4.getHours()+":00";
                  let h5 = new Date(dataDay4.list[25].dt * 1000)
                  window.d5.textContent = h5.getHours()+":00";
                  let h6 = new Date(dataDay4.list[26].dt * 1000)
                  window.d6.textContent = h6.getHours()+":00";
                  let h7 = new Date(dataDay4.list[27].dt * 1000)
                  window.d7.textContent = h7.getHours()+":00";

                  window.f1.textContent = dataDay4.list[21].weather[0].main
                  window.f2.textContent = dataDay4.list[22].weather[0].main
                  window.f3.textContent = dataDay4.list[23].weather[0].main
                  window.f4.textContent = dataDay4.list[24].weather[0].main
                  window.f5.textContent = dataDay4.list[25].weather[0].main
                  window.f6.textContent = dataDay4.list[26].weather[0].main
                  window.f7.textContent = dataDay4.list[27].weather[0].main

                  window.t1.textContent = Math.round(dataDay4.list[21].main.temp - 273.15)+ "°"+"C"; 
                  window.t2.textContent = Math.round(dataDay4.list[22].main.temp - 273.15)+ "°"+"C"; 
                  window.t3.textContent = Math.round(dataDay4.list[23].main.temp - 273.15)+ "°"+"C"; 
                  window.t4.textContent = Math.round(dataDay4.list[24].main.temp - 273.15)+ "°"+"C"; 
                  window.t5.textContent = Math.round(dataDay4.list[25].main.temp - 273.15)+ "°"+"C"; 
                  window.t6.textContent = Math.round(dataDay4.list[26].main.temp - 273.15)+ "°"+"C"; 
                  window.t7.textContent = Math.round(dataDay4.list[27].main.temp - 273.15)+ "°"+"C"; 

                  window.tf1.textContent = Math.round(dataDay4.list[21].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf2.textContent = Math.round(dataDay4.list[22].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf3.textContent = Math.round(dataDay4.list[23].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf4.textContent = Math.round(dataDay4.list[24].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf5.textContent = Math.round(dataDay4.list[25].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf6.textContent = Math.round(dataDay4.list[26].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf7.textContent = Math.round(dataDay4.list[27].main.feels_like - 273.15)+ "°"+"C"; 

                  
                  document.getElementById("img1").src = `http://openweathermap.org/img/wn/${dataDay4.list[21].weather[0].icon}.png`
                  document.getElementById("img2").src = `http://openweathermap.org/img/wn/${dataDay4.list[22].weather[0].icon}.png`
                  document.getElementById("img3").src = `http://openweathermap.org/img/wn/${dataDay4.list[23].weather[0].icon}.png`
                  document.getElementById("img4").src = `http://openweathermap.org/img/wn/${dataDay4.list[24].weather[0].icon}.png`
                  document.getElementById("img5").src = `http://openweathermap.org/img/wn/${dataDay4.list[25].weather[0].icon}.png`
                  document.getElementById("img6").src = `http://openweathermap.org/img/wn/${dataDay4.list[26].weather[0].icon}.png`
                  document.getElementById("img7").src = `http://openweathermap.org/img/wn/${dataDay4.list[27].weather[0].icon}.png`
                  
      })
}
function click5(){
    document.getElementById("div_1").style.background = "whitesmoke";
    document.getElementById("div_2").style.background = "whitesmoke";
    document.getElementById("div_3").style.background = "whitesmoke";
    document.getElementById("div_4").style.background = "whitesmoke";
    document.getElementById("div_5").style.background = "white";
    window.dayiii.textContent = window.dataID_4.textContent
    fetch(`https:/api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=147047276dca13f394bb9acfab77f82d`)  
      .then(function (resp) {return resp.json() })
      .then(function (dataDay5) {
                  console.log(dataDay5)
                  let h1 = new Date(dataDay5.list[28].dt * 1000)
                  window.d1.textContent = h1.getHours()+":00";
                  let h2 = new Date(dataDay5.list[29].dt * 1000)
                  window.d2.textContent = h2.getHours()+":00";
                  let h3 = new Date(dataDay5.list[30].dt * 1000)
                  window.d3.textContent = h3.getHours()+":00";
                  let h4 = new Date(dataDay5.list[31].dt * 1000)
                  window.d4.textContent = h4.getHours()+":00";
                  let h5 = new Date(dataDay5.list[32].dt * 1000)
                  window.d5.textContent = h5.getHours()+":00";
                  let h6 = new Date(dataDay5.list[33].dt * 1000)
                  window.d6.textContent = h6.getHours()+":00";
                  let h7 = new Date(dataDay5.list[34].dt * 1000)
                  window.d7.textContent = h7.getHours()+":00";
           


                  window.f1.textContent = dataDay5.list[28].weather[0].main
                  window.f2.textContent = dataDay5.list[29].weather[0].main
                  window.f3.textContent = dataDay5.list[30].weather[0].main
                  window.f4.textContent = dataDay5.list[31].weather[0].main
                  window.f5.textContent = dataDay5.list[32].weather[0].main
                  window.f6.textContent = dataDay5.list[33].weather[0].main
                  window.f7.textContent = dataDay5.list[34].weather[0].main

                  window.t1.textContent = Math.round(dataDay5.list[28].main.temp - 273.15)+ "°"+"C"; 
                  window.t2.textContent = Math.round(dataDay5.list[29].main.temp - 273.15)+ "°"+"C"; 
                  window.t3.textContent = Math.round(dataDay5.list[30].main.temp - 273.15)+ "°"+"C"; 
                  window.t4.textContent = Math.round(dataDay5.list[31].main.temp - 273.15)+ "°"+"C"; 
                  window.t5.textContent = Math.round(dataDay5.list[32].main.temp - 273.15)+ "°"+"C"; 
                  window.t6.textContent = Math.round(dataDay5.list[33].main.temp - 273.15)+ "°"+"C"; 
                  window.t7.textContent = Math.round(dataDay5.list[34].main.temp - 273.15)+ "°"+"C"; 

                  window.tf1.textContent = Math.round(dataDay5.list[28].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf2.textContent = Math.round(dataDay5.list[29].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf3.textContent = Math.round(dataDay5.list[30].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf4.textContent = Math.round(dataDay5.list[31].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf5.textContent = Math.round(dataDay5.list[32].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf6.textContent = Math.round(dataDay5.list[33].main.feels_like - 273.15)+ "°"+"C"; 
                  window.tf7.textContent = Math.round(dataDay5.list[34].main.feels_like - 273.15)+ "°"+"C"; 

                                    
                  document.getElementById("img1").src = `http://openweathermap.org/img/wn/${dataDay5.list[28].weather[0].icon}.png`
                  document.getElementById("img2").src = `http://openweathermap.org/img/wn/${dataDay5.list[29].weather[0].icon}.png`
                  document.getElementById("img3").src = `http://openweathermap.org/img/wn/${dataDay5.list[30].weather[0].icon}.png`
                  document.getElementById("img4").src = `http://openweathermap.org/img/wn/${dataDay5.list[31].weather[0].icon}.png`
                  document.getElementById("img5").src = `http://openweathermap.org/img/wn/${dataDay5.list[32].weather[0].icon}.png`
                  document.getElementById("img6").src = `http://openweathermap.org/img/wn/${dataDay5.list[33].weather[0].icon}.png`
                  document.getElementById("img7").src = `http://openweathermap.org/img/wn/${dataDay5.list[34].weather[0].icon}.png`
                  

      })

}

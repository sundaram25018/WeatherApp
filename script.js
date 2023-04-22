let weather = {
    apikey: "731b31a39cd041de478f62bb934aa935",
fetchweather: function(city){
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + this.apikey
)
.then((Response)=>Response.json())
.then((data)=>this.displayweather(data));
},
displayweather: function(data){
 const {name} = data
const {icon,description} = data.weather[0];
const {temp,humidity} = data.main;
const{speed} = data.wind;
// console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innerText =  "Weather in " + name;
document.querySelector(".description").innerText = description;
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage = "url('https://source.unsplash.com/1980x1080/?"+ name+ "')"

},
search: function(){
    this.fetchweather(document.querySelector(".searchbar").value);
}

};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".searchbar").addEventListener("keyup",function(event){
if(weather.key == "Enter"){
    weather.search();

}
})
weather.fetchweather("Vadodara");

const weather = {

    sunny:{
        icon:"fa-sun",
        title:"Sunny",
        description:"Bright sunshine with clear blue sky."
    },

    cloudy:{
        icon:"fa-cloud",
        title:"Cloudy",
        description:"Clouds cover most of the sky."
    },

    rainy:{
        icon:"fa-cloud-rain",
        title:"Rainy",
        description:"It is raining outside. Carry an umbrella."
    },

    storm:{
        icon:"fa-cloud-bolt",
        title:"Storm",
        description:"Thunderstorm with lightning and heavy rain."
    },

    snow:{
        icon:"fa-snowflake",
        title:"Snow",
        description:"Snowfall with freezing weather."
    }

};

const select = document.getElementById("weatherSelect");

const icon = document.getElementById("weatherIcon");

const title = document.getElementById("weatherTitle");

const description = document.getElementById("weatherDescription");

const box = document.getElementById("weatherBox");

select.addEventListener("change",function(){

    let value = this.value;

    box.className="weather-box";

    if(value===""){

        icon.className="fa-solid fa-circle-question";

        title.innerHTML="Select Weather";

        description.innerHTML="Please choose a weather condition from the dropdown.";

        return;

    }

    icon.className="fa-solid "+weather[value].icon;

    title.innerHTML=weather[value].title;

    description.innerHTML=weather[value].description;

    box.classList.add(value);

});
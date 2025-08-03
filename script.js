      let weather = {
        "apiKey": "37340fffd70c74e7251b4bd05ef978db",
        fetchweather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey 
                )
                 .then((response) => response.json())
                 .then((data) => this.displayWeather(data));
        },
        displayWeather: function (data) {
                const { name } = data;
                const { icon, description } = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".city").innerText = name; 
                document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
                document.querySelector(".windspeed").innerText = "Wind Speed : " + speed + "km/h";
                document.querySelector(".Wdescription").innerText = description;
                document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +".png";
                document.querySelector(".temp").innerText = "Temperature : " + temp + "°C"; 
                
        }
    }   
weather.fetchweather("san vito dei normanni");

const animated = true;

        if (animated) {
            // hides all elements
            document.querySelectorAll("*").forEach(el => el.style.opacity = 0);

            // anime.js animation function
            function playAnimation() {
                var tl = anime.timeline({
                    easing: "easeInOutExpo",
                    duration: 2000,
                });

                tl.add({
                    targets: "#img",
                    opacity: [0, 1],
                    translateY: [100, 0],
                })
                    .add(
                        {
                            targets: "#img",
                            width: ["100%", "60%"],
                        },
                        "-=1200"
                    )
                    .add(
                        {
                            targets: "main *",
                            opacity: [0, 1],
                            translateY: [10, 0],
                            delay: anime.stagger(15),
                        },
                        "-=1800"
                    );
            }

            window.onload = function () {
                document.querySelectorAll("*").forEach(el => el.style.opacity = 1);
                playAnimation();
            }
        }

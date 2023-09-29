$(document).ready(function () {
  $("#getWeather").click(function () {
    const apiKey = "7f876c297f0259b35fd31ef1042bca07";
    const city = $("#city").val();

    if (city === "") {
      alert("Please enter a city name.");
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},LB&appid=${apiKey}&units=metric`;

    $.ajax({
      url: apiUrl,
      method: "GET",
      dataType: "json",
      success: function (data) {
        displayWeather(data);
      },
      error: function () {
        alert("Error fetching weather data. Please try again.");
      },
    });
  });

  function displayWeather(data) {
    const weatherInfo = $("#weatherInfo");
    weatherInfo.empty();

    if (data.cod === "404") {
      alert("City not found. Please enter a valid city name in Lebanon.");
      return;
    }

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHtml = `
                <div class="col-md-12">
                    <h2>${cityName}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Weather: ${description}</p>
                </div>
            `;

    weatherInfo.append(weatherHtml);
  }
});

// scroll on top
// Get a reference to the scroll-to-top button
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Add a scroll event listener to control the button's visibility
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Display the button when the user scrolls down 100 pixels or more
    scrollToTopButton.style.display = "block";
  } else {
    // Hide the button when the user is at the top
    scrollToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

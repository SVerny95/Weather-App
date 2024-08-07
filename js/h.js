"use strict";

// Допоміжні функції:

const Root = document.documentElement;
const GetStored = (item) => sessionStorage.getItem(item);
const SetStored = (item, value) => sessionStorage.setItem(item, value);
const IsVibrate = () => {
    if (window.navigator.vibrate) {
        window.navigator.vibrate([12, 10, 8, 8]);
    } else {
        return;
    }
}
const IsActive = (item) => {
    let checkActive = true === item.classList.contains("active");
    if (checkActive) {
        item.classList.remove("active");
    } else {
        item.classList.add("active");
    }
}
const SetToRoot = (opt, value) => {
    Root.style.setProperty("--" + opt, value);
}
const $ = (item) => {
    const elements = document.getElementsByTagName("*");
    let length, element;
    for (let el of elements) {
        const checkID = true === (item === el.id);
        const checkCN = true === el.classList.contains(item);
        const checkAN = true === el.hasAttribute(item);
        const checkTN = true === (item === el.tagName.toLowerCase());
        if (checkID) {
            element = document.getElementById(item);
        } else if (!checkID) {
            if (checkCN) {
                length = document.querySelectorAll("." + item).length;
                if (length > 1) {
                    element = document.querySelectorAll("." + item);
                } else {
                    element = document.querySelector("." + item);
                }
            } else if (!checkCN) {
                if (checkAN) {
                    length = document.querySelectorAll("[" + item + "]").length;
                    if (length > 1) {
                        element = document.querySelectorAll("[" + item + "]");
                    } else {
                        element = document.querySelector("[" + item + "]");
                    }
                } else if (!checkAN) {
                    if (checkTN) {
                        length = document.getElementsByTagName(item).length;
                        if (length > 1) {
                            element = document.querySelectorAll(item);
                        } else {
                            element = document.querySelector(item);
                        }
                    }
                }
            }
        }
    }
    return element;
}
const _ = (type) => {
    if (typeof document.createElement !== "function") {
        return false;
    }
    return document.createElement(type);
}

// API-ключ OpenWeatherMap:

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

// Отримуємо поточне місцезнаходження користувача та виводимо всю необхідну інформацію про погоду:

function GetPosition() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(ShowLocation);
    } else {
        return;
    }
}
function ShowLocation(location) {
    const userCoords = {
        lat: location.coords.latitude,
        lon: location.coords.longitude
    }
    SetStored("user-coordinates", JSON.stringify(userCoords));
    fetchUserWeatherInfo(userCoords);
}
function GetFromSS() {
    const locCoords = GetStored("user-coordinates");
    if (!locCoords) {
        return;
    } else {
        const coords = JSON.parse(locCoords);
        fetchUserWeatherInfo(coords);
    }
}

// Асинхронний виклик API:

async function fetchUserWeatherInfo(coords) {
    const { lat, lon } = coords;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ua`);
        const data = await response.json();
        console.log(data.list)
        ShowWeatherInfo(data);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ua`)
        .then(response => response.json())
        .then(data => {
            const dailyForecasts = {};
              data.list.forEach(entry => {
                const dateTime = new Date(entry.dt * 1000);
                const date = dateTime.toLocaleDateString('uk', { weekday: 'long' });
                if (!dailyForecasts[date]) {
                  dailyForecasts[date] = {
                    date: date,
                    icon: `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`,
                    maxTemp: -Infinity,
                    minTemp: Infinity,
                    weatherType: entry.weather[0].main,
                    tem: entry.main.temp,
                    wind: entry.wind.speed,
                    hum: entry.main.humidity,
                    clds: entry.clouds.all,
                    desc: entry.weather[0].description
                  };
                }
                if (entry.main.temp_max > dailyForecasts[date].maxTemp) {
                  dailyForecasts[date].maxTemp = entry.main.temp_max;
                }
                if (entry.main.temp_min < dailyForecasts[date].minTemp) {
                  dailyForecasts[date].minTemp = entry.main.temp_min;
                }
              });
              Object.values(dailyForecasts).forEach(day => {
                const forecastCard = $("weekly-box");
                const cardy = _("div");
                cardy.className = "main-box-item option";
                cardy.innerHTML = `
                        <div class="weekly-opt-item">
                            <p class="css-1iwsjz8">${day.date.charAt(0).toUpperCase() + day.date.slice(1)}</p>
                            <div class="weekly-icon-box">
                                <img class="css-17osf7h" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJNQTFRFR3BM////////////////////////////////////////////MInI////////////MInIMInIMInIMInI////MInIL4nIMInIMInIMInIMInIMInIL4nIMInIL4nIMInIL4nIL4nIMInIL4nIL4nIMInIL4nIL4nIL4nIL4nIL4nIL4nIL4nIL4nI////MInIL4nIujqO7gAAAC50Uk5TACDfzzAQYL/vQIBw76+fUCAQ35+PYO+/QIAwzxBQn49g33BAIK+/gHAwz69Qj0XvwtUAAASrSURBVHja7Vlrl6IwDOVdCiI+GEXHnYfOjM5jxf//61ZbwIBAK21hzxzup+pBE5rc5KbVtAEDBgwYMOA3AHuBeSQwkBfaHVu3xu6xCNPp0AeMjlUY692Y16vNd+aCd2yA66s2bxdf30QIGYVvArWpYF2tuWPHyr71A+CTpdJ+nvuGU9oZP3fNtdTbL5sn8F3VHuT2o+o421kgDIl5YOHQCzEm7E/tu07t037qAZJEeB+BdDd5NthJH5LBRn1czfTmAKceuMIVyY5qSk3I+GHqwVj09c0a+x7zp+nG6ZL4Xu55HHtniG+Bntt3gzMHHC9PRh6GY/qoABVt86be2A55r4jr99Rdp70DUWW8nQDx2U+3IGifAOnu49b/QHew9c8Rf7gbCyIW2wCRWqZzMraJx2LV3BBJAldo/0AUkUgEDAm60RVJoEiCAy1pEHC1HHUO2K4oBwUdSFW/1pcDWRsUdCBo25HDrA0KOmC2a0f2VYQJOtCum4RXFSJYBnCuX/w7VAHUoI6YA1GLgdkGIhBhKSmQiSrvPvuGL6yorZKQRBxxQE1Dn0gEOIfF7NBhLGWos/AFTmRye2BJHKgKwsTLB2adJwAKjlfyAcu02bQNNBXIZuqIWbldRYc7WXvBDAnZWkPyeoAY86yr7nTLZ2zBWMo8za6MgbJRjt3mmsfVowwRxjEn1ApNKQqAp9NG/TngN/KgAwfw/+2AIXqiIuoAkjCNMuA0FgJPxjTII1G8xjJhqK8DdZtsH1XHADPyPOA9g4xX22m2Xi+TefZhc3jZsAVPwEgRtiCKkyQZrel6Ojt/WNL15+J0WuyYrQCzQsQMwmNyNbq6rBO6/jid8cWa+A0mS1jadZ0AB2ZXB94u9k8L1sgRcqhSt7Enz4nNOVn/IesZWT8RB77r9JDJc4mSn04H9fJ5SmwmNAeWZP1MMnBBHHipaUMu3w1GmI8QUd2TNOqPZD2hzkwu6xdi/7Vy9x2D954jv+y58NELcUVnoFF/ANF4J+sv4sD+hvvYC+4at52662ADg6iPaDRG5EN8We+I/dPbOdr1l9pces8y6i6ky1HXtjcp+HQlc8UfcB761d5T6aWow2hs6Abscl1xC8Q/79fc1F3+4BkUgTQapBAfrilYc8t0X4/RfbPyoiqN+p+baLxeOViRAu64RYvTQy9AAOTM4AFEHUaDpuCCtCLbRwV4vkSpT9pAsgIcpNH4zlNQLWLw0jAabzkHFQO2AcjBPbH/odx+2gZiwMFtOQWVYgVeOgYc/GluxPIAX/odROOjug1IByw8kIOdpSB8aVgR/zYqEXmYACVSqIhUifwod+AZKBFYERuUiFyMgBKB6UhT8KDc/gNQImlFJOn4SVNwo9wB2PtgOj511AbWgHcwHVMxvOuoDSxvONhVCkLeTWE6dtUGIO/gGioRpYBKZAbWfaQg5GAqhj87VSKQg1QMf3VVBeMyB9MqqD4FNZB2sCXQPtSBEqE5eMtBmoOHDhyYzpPR9qYlnJNwv1jstU4B+dgH4GTQCyAf+8AETgZ9AB4Q9YICB3tAkYM9oG8Oan1zkKbAe3/2aQ6se3RAm6xWsTZgwIABvwj/AN5AbCBvQJzEAAAAAElFTkSuQmCC">
                                <h4 class="css-wcuibx">${day.desc}</h4>
                            </div>
                        </div>
                        <div class="opt-item">
                            <div class="opt-item-inner">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThermostatIcon"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path></svg>
                                <p class="par-description">${Math.round(day.tem)}°C</p>
                            </div>
                            <div class="opt-item-inner">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterDramaIcon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></svg>
                                <p class="par-description">${day.clds}%</p>
                            </div>
                        </div>
                        <div class="opt-item">
                            <div class="opt-item-inner">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirIcon"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path></svg>
                                <p class="par-description">${day.wind}м/с</p>
                            </div>
                            <div class="opt-item-inner">
                                <svg class="param-svg" opacity=".7" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 132.9 135.7" xml:space="preserve" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" aria-hidden="true"><style>.st0{fill:#fff}</style><path class="st0" d="M45.5 121.7C20.3 121.4 2.9 98.4 9.6 74c5.9-21.4 19-38.6 32.5-55.6 2.8-3.5 4.9-3.7 7.8-.1 13.4 17 26.6 34.2 32.5 55.6 6.9 24.9-11.2 48.2-36.9 47.8zm.6-49.3c7.5 0 17.3.9 20.9-4.8 3.4-5.4-3.8-12.5-7.3-18.5-13.6-23.4-13.8-23.5-27.5.1-3.4 5.9-10.8 13-7.2 18.5 3.8 5.6 13.6 4.7 21.1 4.7zM110.3 23c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4-3.1-.1-6.1 0-9 0zM110.2 71.7c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4-3.1-.1-6.1 0-9 0zM110.2 121.6c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4h-9zM113.8 103.5h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1zM113.8 53.8h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1zM113.8 87.9h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2 0-4.4.1-6.5.1zM113.8 38.4h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1z"/></svg>
                                <p class="par-description">${day.hum}%</p>
                            </div>
                        </div>
                `;
                forecastCard.appendChild(cardy);
              });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
              });
    } catch (error) {
        return;
    }
}
async function fetchSearchWeatherInfo(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`);
        const data = await response.json();
        ShowWeatherInfo(data);
    }
    catch(error) {
        return;
    }
}

// Вивід інформації:

function ShowWeatherInfo(weatherInfo) {
    
    function ShowInfo() {
        const wind       = weatherInfo?.wind?.speed;
        const degWind    = weatherInfo?.wind?.deg;
        const visibility = weatherInfo?.visibility;
        const temp       = weatherInfo?.main.temp;
        const feels      = weatherInfo?.main?.feels_like;
        const humidity   = weatherInfo?.main?.humidity;
        const press      = weatherInfo?.main?.pressure;
        const desc       = weatherInfo?.weather?.[0]?.description;
        const icon       = weatherInfo?.weather?.icon;
        const clouds     = weatherInfo?.clouds?.all;
        console.log(`${visibility / 1000}км`);
        DegWind();
        
        $("data-temp").innerText = `${Math.round(temp)}°C`;
        $("data-humidity").innerText = `${humidity}%`;
        console.log(`${press}гПа`);
        $("data-desc").innerText = desc;
        $("data-feels").innerText = `${Math.round(feels)}°C`;
        console.log(icon);
        $("data-speed").innerText = `${wind}м/с`;
        $("data-clouds").innerText = `${clouds}%`;
        ShowCity();
       
        function DegWind() {
            if (degWind >= 350 || degWind <= 10) {
                console.log("Північний");
            } else if (degWind > 10 && degWind < 80) {
                console.log("Північно-східний");
            } else if (degWind >= 80 && degWind <= 100) {
                console.log("Східний");
            } else if (degWind > 100 && degWind < 170) {
                console.log("Південно-східний");
            } else if (degWind >= 170 && degWind <= 190) {
                console.log("Південний");
            } else if (degWind > 190 && degWind < 260) {
                console.log("Південно-західний");
            } else if (degWind >= 260 && degWind <= 280) {
                console.log("Західний");
            } else {
                console.log("Північно-західний");
            } 
            console.log(weatherInfo)
        }
        function ShowCity() {
            if (weatherInfo?.name === "Dobropol'ye" || weatherInfo?.name === "Dobropillia") {
                $("data-city").innerText = "Добропілля";
            } else {
                $("data-city").innerText = weatherInfo?.name;
            }
        }
        function ShowDate() {
            let date = new Date();
            let mont = date.getMonth();
            if (mont === 0) {
                mont = "Січня"
            } else if (mont === 1) {
                mont = "Лютого"
            } else if (mont === 2) {
                mont = "Березня"
            } else if (mont === 3) {
                mont = "Квітня"
            } else if (mont === 4) {
                mont = "Травня"
            } else if (mont === 5) {
                mont = "Червня"
            } else if (mont === 6) {
                mont = "Липня"
            } else if (mont === 7) {
                mont = "Серпня"
            } else if (mont === 8) {
                mont = "Вересня"
            } else if (mont === 9) {
                mont = "Жовтня"
            } else if (mont === 10) {
                mont = "Листопада"
            } else {
                mont = "Грудня"
            }
            let day = date.getDate();
            $("data-date").innerText = 'Сьогодні, ' + day + ' ' + mont;
        }
        ShowDate();

    }
    ShowInfo()
}
GetPosition();


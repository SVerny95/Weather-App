<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="wrapper">
        <div class="main-box">
            <div class="main-box-item main-box-header">
                <div class="main-box-header-top"></div>
                <div class="main-box-header-bottom">
                    <span class="v-hidden"></span>
                    <div class="select-box">
                        <div class="select-box-inner">
                            <div class="select-box-field"></div>
                            <form action="/weather" method="get" class="select-box-input">
                                <input type="text" name="city" placeholder="Enter city name" autocapitalize="none" autocomplete="off" tabindex="0" autocorrect="off" spellcheck="false" />
                                <button type="submit" style="position: relative;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l4.79 4.79-1.06 1.06-4.79-4.79Z" fill="#080341"/></svg>
                                </button>
                            </form>
                        </div>
                        <% if (error) { %>
                            <p class="error"><%= error %></p>
                            <% } else if (weather) { %>
                        <div class="select-box-arrow">
                            <span class="select-box-arrow-border"></span>
                            <div class="arrow-box">
                                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="arrow-svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-box-item info-box-current">
                <div class="info-box-current-inner main-box-header">
                    <div class="info-box-current-inner-box">
                        <div class="container">
                            <div class="main-box-item main-box-header">
                                <h5 class="header-txt">CURRENT WEATHER</h5>
                            </div>
                            <div class="main-box-item container-option">
                                <div class="option">
                                    <h3 data-city><%=weather.name%>, <%=weather.sys.country%></h3>
                                    <h4 data-date=""></h4>
                                </div>
                            </div>
                            <div class="main-box-item container-option">
                                <div class="option">
                                    <h3 data-temp><%=parseFloat(weather.main.temp).toFixed()%>&deg;C</h3>
                                    <h4 data-desc><%=weather.weather[0].description%></h4>
                                </div>
                            </div>
                            <div class="main-box-item co-icon">
                                <img class="dayly-time-icon" src="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="side-box">
                    <div class="main-box-item main-box-header">
                        <h5 class="header-txt-2">AIR CONDITIONS</h5>
                    </div>
                    <div class="main-box-item parameter">
                        <div class="main-box-item param-top">
                            <div class="param-icon">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ThermostatIcon"><path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1h-2z"></path></svg>
                            </div>
                            <p class="param-description">Feels like</p>
                        </div>
                        <div class="main-box-item param-bottom">
                            <div data-feels><%=parseFloat(weather.main.feels_like).toFixed()%>&deg;C</div>
                        </div>
                    </div>
                    <div class="main-box-item parameter">
                        <div class="main-box-item param-top">
                            <div class="param-icon">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AirIcon"><path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z"></path></svg>
                            </div>
                            <p class="param-description">Wind</p>
                        </div>
                        <div class="main-box-item param-bottom">
                            <div data-speed><%=weather.wind.speed%>m/s</div>
                        </div>
                    </div>
                    <div class="main-box-item parameter">
                        <div class="main-box-item param-top">
                            <div class="param-icon">
                                <svg class="param-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterDramaIcon"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"></path></svg>
                            </div>
                            <p class="param-description">Cloudiness</p>
                        </div>
                        <div class="main-box-item param-bottom">
                            <div data-clouds><%=weather.clouds.all%>%</div>
                        </div>
                    </div>
                    <div class="main-box-item parameter">
                        <div class="main-box-item param-top">
                            <div class="param-icon">
                                <svg class="param-svg" opacity=".7" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 132.9 135.7" xml:space="preserve" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" aria-hidden="true"><style>.st0{fill:#fff}</style><path class="st0" d="M45.5 121.7C20.3 121.4 2.9 98.4 9.6 74c5.9-21.4 19-38.6 32.5-55.6 2.8-3.5 4.9-3.7 7.8-.1 13.4 17 26.6 34.2 32.5 55.6 6.9 24.9-11.2 48.2-36.9 47.8zm.6-49.3c7.5 0 17.3.9 20.9-4.8 3.4-5.4-3.8-12.5-7.3-18.5-13.6-23.4-13.8-23.5-27.5.1-3.4 5.9-10.8 13-7.2 18.5 3.8 5.6 13.6 4.7 21.1 4.7zM110.3 23c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4-3.1-.1-6.1 0-9 0zM110.2 71.7c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4-3.1-.1-6.1 0-9 0zM110.2 121.6c-2.6 0-5.2-.1-7.7 0-2.8.1-4.9-.2-4.9-4-.1-3.9 1.3-5.2 5.1-5 5.5.2 11.1.1 16.6 0 3.3-.1 5.5.2 5.5 4.6 0 4.5-2.5 4.5-5.6 4.4h-9zM113.8 103.5h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1zM113.8 53.8h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1zM113.8 87.9h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2 0-4.4.1-6.5.1zM113.8 38.4h-5.6c-2.1.1-3.5-.2-3.6-2.9-.1-2.8.9-3.8 3.7-3.7 4 .2 8.1.1 12.1 0 2.4 0 4 .1 4 3.3 0 3.3-1.8 3.3-4.1 3.2-2.2.1-4.4.1-6.5.1z"/></svg>
                            </div>
                            <p class="param-description">Humidity</p>
                        </div>
                        <div class="main-box-item param-bottom">
                            <div data-humidity><%=parseFloat(weather.main.temp).toFixed()%>%</div>
                        </div>
                    </div>
                </div>
                <div class="side-box">
                    <div class="main-box-item main-box-header">
                        <h5 class="header-txt-2">Прогноз на сьогодні</h5>
                    </div>
                    <div class="main-box-item time-weather-box">
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">6:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>
                            
                            </div>
                        </div>
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">9:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>

                            </div>
                        </div>
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">12:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>

                            </div>
                        </div>
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">15:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>

                            </div>
                        </div>
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">18:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>

                            </div>
                        </div>
                        <div class="main-box-item option">
                            <div class="opt-inner">
                                <h3 class="time">21:00</h3>
                                <div class="css-1ikwdpn"><img class="css-14eows7" alt="weather" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFR3BM////////////////////////////////////////////////////////////////z9GKYQAAABB0Uk5TAM+f3+9gMECAECC/cFCPr3ODawMAAAKgSURBVHja7VrL2qsgDJR7QNC8/9OehdevvwUUYs8is8dMITNJoMPAYDAYDAaDwWAwGAwGowu8SwAAzv0kepIKd4gpvRs9TBo/oOV7G+ElXkKYd+JHjd8gXtgFP2IO0hPHt6efr2aIzkWYT+mIypLGN3t8BeGUlFEcFCgzwezh/0Sx8gUGe3y41OZIzSCVjnnXR788cBEAAKLzx+eFL6ao7qMFM5+ze9d67uN+Tca5h9+oa6/J/zi/rmquDVZcG422dUahuun9A6lWKqaP3j5Rc7aLGkUPvSHOxg3DYI3U9dkdmqUYtv2Xh9t60NX7unji9JzAeOk3PsrK1A6NaWiq9JbDoqDwdLlqjT/EJh2kdju33ytWdQpBk4wREXF8uHiRQFs1GRucwPUoJouOnq2FHi0FNBBYJOR+RmD10eFnBMYuBOTjj2yt7dAjCe9byTH1NBJQz7wkHV1I4/i2de+3ysF55hVtBI5+QsRqR/PiRuNXwHRuIsHfjX+DddZL9obe3YmvIQytCJ+dpKmWP049Rpr499agzrlQd71qcvGYrKaqPdPd7xaCrDuFsfdMezFh2WIHhZFmqJdla5FdprkSg1hqwsguVlaJf5+qEu0G7Eds8sY50RFYD0HkNUB527zKPGSLdyAksBYHk5sikDJ+4ZRfIJCyo9ILBNz/TUCQFYJKAjO5DNcOYco2A5KSwJyVoe15vZurNiE/RhC+M5hCtQHqLVCFauM1bRYAlsweSB861mqcuzLa7thJGGyPGLZsFCRt4RZ/qjomHAOJBSGqUorvDbzs6clG1Y+7x3CuJLgOSDDrW0+JEsmg67LbaKL41c/JYSSJf2fidv0pyJu6CrEjByHNowITln/HZJGKKiDt8xkMBoPBYDAYDAaD0Yp/U/9kFCDYt94AAAAASUVORK5CYII="></div>
                                <h3 class="css-4cdf92">25 °C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <% } %>
            <div class="main-box-item info-box-current">
                <div class="info-box-weekly">
                    <div class="main-box-item main-box-header">
                        <h5>Погода на тиждень</h5>
                    </div>
                    <div class="main-box-item weekly-box">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        console.log(data.list)
        ShowWeatherInfo(data);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const dailyForecasts = {};
              data.list.forEach(entry => {
                const dateTime = new Date(entry.dt * 1000);
                const date = dateTime.toLocaleDateString('uk', { weekday: 'long' });
                if (!dailyForecasts[date]) {
                  dailyForecasts[date] = {
                    date: date,
                    icon: `${entry.weather[0].icon}.png`,
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
                                <img class="css-17osf7h" alt="weather" src="/icons/${day.icon}">
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
        const degWind    = weatherInfo?.wind?.deg;
        const visibility = weatherInfo?.visibility;
        const press      = weatherInfo?.main?.pressure;
        const icon       = weatherInfo?.weather?.icon;
        console.log(`${visibility / 1000}км`);
        DegWind();
        $("dayly-time-icon").src = `/icons/${weatherInfo?.weather[0]?.icon}.png`;
        console.log(`${press}гПа`);
        $("data-feels").innerText = `${Math.round(feels)}°C`;
        console.log(icon);
       
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
        function ShowDate() {
            let date = new Date();
            let mont = date.getMonth();
            if (mont === 0) {
                mont = "January"
            } else if (mont === 1) {
                mont = "February"
            } else if (mont === 2) {
                mont = "March"
            } else if (mont === 3) {
                mont = "April"
            } else if (mont === 4) {
                mont = "May"
            } else if (mont === 5) {
                mont = "June"
            } else if (mont === 6) {
                mont = "July"
            } else if (mont === 7) {
                mont = "August"
            } else if (mont === 8) {
                mont = "September"
            } else if (mont === 9) {
                mont = "October"
            } else if (mont === 10) {
                mont = "November"
            } else {
                mont = "December"
            }
            let day = date.getDate();
            $("data-date").innerText = 'Today, ' + day + ' ' + mont;
        }
        ShowDate();

    }
    ShowInfo()
}
GetPosition();
    </script>
</body>
</html>
var cityInputMobile = document.getElementById("mobileSearchCity");
cityInputMobile.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    loader();
    function loader() {
      document.getElementById("locationName").innerHTML = "";
      document.getElementById("temperatureValue").innerHTML = "";
      document.getElementById("weatherType").innerHTML = "";
      const img1 = document.createElement("img");
      const img2 = document.createElement("img");
      const img3 = document.createElement("img");
      img1.id = "loader1";
      img2.id = "loader2";
      img3.id = "loader3";
      img1.src = "icons/loader.gif";
      img2.src = "icons/loader.gif";
      img3.src = "icons/loader.gif";
      const parentElement1 = document.getElementById("locationName");
      const parentElement2 = document.getElementById("temperatureValue");
      const parentElement3 = document.getElementById("weatherType");
      parentElement1.appendChild(img1);
      parentElement2.appendChild(img2);
      parentElement3.appendChild(img3);
      // document.getElementById("loader1").src = "icons/loader.gif";
      // document.getElementById("loader2").src = "icons/loader.gif";
      // document.getElementById("loader3").src = "icons/loader.gif";
    }
    var cityInputValue = cityInputMobile.value;
    var apiKey = "b1fd6e14799699504191b6bdbcadfc35"; // Default
    var unit = "metric";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${apiKey}&units=${unit}`;
    if (cityInputValue != "") {
      async function getWeather() {
        var response = await fetch(apiUrl);
        var data = await response.json();
        if (data.message != "city not found" && data.cod != "404") {
          var location = data.name;
          var temperature = data.main.temp;
          var weatherType = data.weather[0].description;
          var realFeel = data.main.feels_like;
          var windSpeed = data.wind.speed;
          var windDirection = data.wind.deg;
          var visibility = data.visibility / 1000;
          var pressure = data.main.pressure;
          var maxTemperature = data.main.temp_max;
          var minTemperature = data.main.temp_min;
          var humidity = data.main.humidity;
          var sunrise = data.sys.sunrise;
          var sunset = data.sys.sunset;
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInputValue}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
              const forecastContainer = document.getElementById('forecast-container');
              forecastContainer.innerHTML = '';
              const dailyForecasts = {};
              data.list.forEach(entry => {
                const dateTime = new Date(entry.dt * 1000);
                const date = dateTime.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
                if (!dailyForecasts[date]) {
                  dailyForecasts[date] = {
                    date: date,
                    icon: `https://openweathermap.org/img/w/${entry.weather[0].icon}.png`,
                    maxTemp: -Infinity,
                    minTemp: Infinity,
                    weatherType: entry.weather[0].main
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
                const forecastCard = document.createElement('div');
                forecastCard.classList.add('daily-forecast-card');
                forecastCard.innerHTML = `
                  <p class="daily-forecast-date">${day.date}</p>
                  <div class="daily-forecast-logo"><img class="imgs-as-icons" src="${day.icon}"></div>
                  <div class="max-min-temperature-daily-forecast">
                    <span class="max-daily-forecast">${Math.round(day.maxTemp - 273.15)}<sup>o</sup>C</span>
                    <span class="min-daily-forecast">${Math.round(day.minTemp - 273.15)}<sup>o</sup>C</span>
                  </div>
                  <p class="weather-type-daily-forecast">${day.weatherType}</p>
                `;
                forecastContainer.appendChild(forecastCard);
              });
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
          document.getElementById("locationName").innerHTML = location;
          document.getElementById("temperatureValue").innerHTML = temperature + "<sup>o</sup>C";
          document.getElementById("weatherType").innerHTML = weatherType;
          document.getElementById("realFeelAdditionalValue").innerHTML = realFeel + "<sup>o</sup>C";
          document.getElementById("windSpeedAdditionalValue").innerHTML = windSpeed + " km/h";
          document.getElementById("windDirectionAdditionalValue").innerHTML = windDirection;
          document.getElementById("visibilityAdditionalValue").innerHTML = visibility + " km";
          document.getElementById("pressureAdditionalValue").innerHTML = pressure;
          document.getElementById("maxTemperatureAdditionalValue").innerHTML = maxTemperature + "<sup>o</sup>C";
          document.getElementById("minTemperatureAdditionalValue").innerHTML = minTemperature + "<sup>o</sup>C";
          document.getElementById("humidityAdditionalValue").innerHTML = humidity;
          document.getElementById("sunriseAdditionalValue").innerHTML = sunrise;
          document.getElementById("sunsetAdditionalValue").innerHTML = sunset;
        }
        else {
          document.getElementById("locationName").innerHTML = "City Not Found";
          document.getElementById("temperatureValue").innerHTML = "";
          document.getElementById("weatherType").innerHTML = "";
        }
      }
      getWeather();
    }
    else document.getElementById("locationName").innerHTML = "Enter a city name...";
  }
});


let gettodayweather = document.getElementById('gettodayweather');
let weatherText = document.getElementById('weatherText');

gettodayweather.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=ae0931c05214f8ccace7671309720fae`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // weatherText = data;
//             قم بعرض

// اسم المدينه: الرياض

// درجة الحراره

// درجة الرطوبة

// خطوط الطول

// خطوط العرض

//             بونس: قم بعمل خانة للبحث عن مدينة معينة
        })
})
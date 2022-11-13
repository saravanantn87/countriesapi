const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/all');

request.send(null);

request.onload = function () {
    // console.log(request.responseText)
    // console.log(typeof request.responseText);
    const countries = JSON.parse(request.responseText);
    console.log(countries);


    for (var i = 0; i < countries.length; i++) {
        const { flag, timezones, population, region: { common }} = countries[i];
        console.log(flag, timezones, population, common);
    }
};
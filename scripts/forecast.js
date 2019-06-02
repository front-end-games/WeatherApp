class Forecast {
    constructor(){
        this.key = 'hVbQgoEwHGHu0aKbXQEhXKT852Nu8vOd';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';   // w przypadku CORS dodać https://cors-anywhere.herokuapp.com/
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {    // wzięte z app.js
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return {cityDetails, weather};
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }

    async getWeather(cityId) {
         
        const query = `${cityId}?apikey=${key}`
    
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}
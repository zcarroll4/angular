import { Component } from '@angular/core';
import axios from 'axios';
import { Weather } from 'src/app/weather';
@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss']
})
export class ZipCodeComponent {
  val = '';
  apiKey = '6067074c07a54e73b0e2b33fa76fbe5b';
  temp = '';
  weatherData: any;
  showRightCol = false;
  processKeyup(value: string) {
    this.val = value;
    if (value.length >= 5) {
      this.getWeatherByZip(Number(value));
    } else {
      this.showRightCol = false;
    }
  }

  async getWeatherByZip(zip: number) {
    if (zip.toString().length < 5) {
      console.error('must enter min. 5 digits');
      return;
    }

    const url = "https://api.openweathermap.org/data/2.5/weather?" +
      "zip=" + zip +
      "&appid=" + this.apiKey +
      "&units=imperial";

    try {
      console.log(this.degToCompass(30));
      const weather = await axios.get(url);
      console.log(weather);
      this.showRightCol = true;
      let iconURL = "http://openweathermap.org/img/wn/" + weather.data.weather[0].icon + "@2x.png";
      this.weatherData = new Weather(Math.round(weather.data.main.temp),
        Math.round(weather.data.main.feels_like),
        weather.data.main.humidity,
        Math.round(weather.data.main.temp_max),
        Math.round(weather.data.main.temp_min),
        weather.data.name,
        weather.data.sys.country,
        weather.data.weather[0].main,
        weather.data.weather[0].description,
        Math.round(weather.data.wind.speed),
        weather.data.wind.deg,
        iconURL);
    } catch (exception) {
      console.log(exception);
    }

  }


  degToCompass(num : number){
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}



}
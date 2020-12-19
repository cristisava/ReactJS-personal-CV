import React from "react";
import "./weatherapp.css";
import InputCity from "./inputCity.jsx";

class Weather extends React.Component {
  state = {
    temperature: "",
    error: "",
    isFetching: false,
  };

  getTemperature = (city) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=628203e283eaf502b1cd9e2dc7eabceb";
    this.setState({
      isFetching: true,
    });
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        this.setState({
          temperature: celcius,
          isFetching: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          isFetching: false,
        });
      });
  };

  render() {
    let data = null;
    if (this.state.isFetching && !this.state.error) {
      data = <p> Loading ... </p>;
    } else if (this.state.error) {
      data = <p>Something Went Wrong : {this.state.error}</p>;
    } else if (this.state.temperature !== "") {
      data = <p className="temp-div">{this.state.temperature}°C</p>;
    }
    return (
      <div>
        <h1 className="the-title">What's the weather in your city</h1>
        <InputCity getTemperature={this.getTemperature} /> <br />
        {data}
      </div>
    );
  }
}

export default Weather;

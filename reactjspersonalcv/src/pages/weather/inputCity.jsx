import React from "react";

export default class InputCity extends React.Component {
  state = {
    city: ""
  };

  handleChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="city-input-container">
          <input
            className="city-input"
            type="text"
            placeholder="Input City Name"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </div>
        <div className="city-button">
          <button
            className="work-btn"
            onClick={() => {
              this.props.getTemperature(this.state.city);
            }}
          >
            Get Temperature
          </button>
        </div>
      </div>
    );
  }
}

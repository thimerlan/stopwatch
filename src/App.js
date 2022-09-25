import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    disabledBtn: false,
    disabledBtnTwo: true,
    interval: "",
    intervalsStorage: [],
  };

  // LOGIC WATCH
  startClicked = () => {
    this.setState({
      disabledBtn: true,
    });
    this.setState({
      disabledBtnTwo: false,
    });
    let timer = setInterval(() => {
      let { second, minute, hour } = this.state;

      if (second === 59) {
        if (minute === 60) {
          this.setState({
            second: 0,
            minute: 0,
            hour: (hour += 1),
          });
        } else {
          this.setState({
            second: 0,
            minute: (minute += 1),
          });
        }
      } else {
        this.setState({
          second: (second += 1),
        });
      }
    }, 1000);
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      disabledBtn: false,
    });
  };

  intervalClicked = () => {
    const { hour, minute, second, intervalsStorage } = this.state;
    intervalsStorage.push(`${hour}:${minute}:${second}`);
    this.setState({
      intervalsStorage,
    });
  };
  ClearClicked = () => {
    clearInterval(this.state.interval);
    const { hour, minute, second, intervalsStorage } = this.state;
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      disabledBtn: false,
      intervalsStorage: [],
    });
  };
  // LOGIC WATCH
  render() {
    const {
      hour,
      minute,
      second,
      disabledBtn,
      intervalsStorage,
      disabledBtnTwo,
    } = this.state;

    return (
      <div className="App">
        <div className="stop-watch-img">
          <img src={logo} alt="Smart watch" />
        </div>
        <div className="timer-container">
          <div className="title-watch">
            <h2>
              <span id="online">Cool </span>{" "}
              <span id="stop-Watch"> StopWatch</span>
            </h2>
          </div>

          <div className="timer-content">
            <p className="timer-hours style-numbers">{hour}</p>
            <p className="timer-label label-style">Hours</p>
          </div>

          <div className="timer-content">
            <p className="timer-minutes style-numbers">{minute}</p>
            <p className="timer-label label-style">Minutes</p>
          </div>

          <div className="timer-content">
            <p className="timer-seconds style-numbers">{second}</p>
            <p className="timer-label label-style">Seconds</p>
          </div>
        </div>

        <div className="timer-container btn-container">
          <div className="timer-btn">
            <button
              className="start-btn"
              onClick={this.startClicked}
              disabled={disabledBtn}
            >
              Start
            </button>
          </div>

          <div className="timer-btn">
            <button className="stop-btn" onClick={this.stopClicked}>
              Stop
            </button>
          </div>

          <div className="timer-btn">
            <button
              className="interval-btn"
              onClick={this.intervalClicked}
              disabled={disabledBtnTwo}
            >
              Interval
            </button>
          </div>

          <div className="timer-btn">
            <button className="clear-btn" onClick={this.ClearClicked}>
              Clear
            </button>
          </div>
        </div>
        <div className="timer-container-intervals">
          {intervalsStorage.map((item, index) => (
            <p key={index}>
              {" "}
              {index + 1}. {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

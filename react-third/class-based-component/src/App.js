import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Lionel Messi",
        bio: "Argentinian footballer, considered one of the greatest of all time.",
        imgSrc: "https://example.com/messi.jpg", // Replace with actual image URL
        profession: "Footballer",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="container text-center mt-5">
        <h1>Class-Based Component Example</h1>
        <button className="btn btn-primary my-3" onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="card p-4">
            <img
              src={this.state.person.imgSrc}
              alt={this.state.person.fullName}
              className="img-fluid rounded-circle"
              width="150"
            />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h4>Profession: {this.state.person.profession}</h4>
          </div>
        )}

        <p>Time since mount: {this.state.timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;

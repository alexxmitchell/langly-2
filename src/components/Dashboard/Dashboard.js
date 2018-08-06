import React, { Component } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import dropdown from '../Header/dropdown/dropdown';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    learning: '',
    background: 'white',
    switch: false
  };
  componentDidMount = () => {
    let hasLang = localStorage.getItem('learnlanguage');
    if (hasLang) {
      this.setState(() => {
        learning: hasLang;
      });
    }
    this.props.toggler();

    this.setState(() => ({ background: 'gray' }));

    console.log(this.props.toggle);
  };

  signInOverlay = () => {
    this.props.toggler();
    this.setState(() => ({ background: 'white' }));
  };

  toggleLogin = () => {
    this.setState({ switch: true });
  };

  toggleRegister = () => {
    this.setState({ switch: false });
  };

  //api call to translate based on this.state.learning
  render() {
    return (
      <div
        className="dashboard"
        style={{ backgroundColor: `${this.state.background}` }}
      >
        <h1>Dashboard</h1>
        {this.props.toggle && (
          <div className="dashboard__overlay">
            <button
              className="dashboard__overlay__close"
              onClick={() => this.signInOverlay()}
            >
              &times;
            </button>
            {this.state.switch ? (
              <Login toggleRegister={this.toggleRegister} />
            ) : (
              <Register toggleLogin={this.toggleLogin} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default dropdown(Dashboard);
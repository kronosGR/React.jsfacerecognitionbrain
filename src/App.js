import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({
  apiKey: 'c1f4d7bd2a17465f81c44913eac997b7',
});

const particlesOptions = {
  number: {
    value: 30,
    density: {
      enable: true,
      value_area: 800,
    },
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  onInputChange = (event) => {
    console.log(event.target);
  };

  onButtonSubmit = (event) => {
    // model_id: '31025e019a18970a1acc55ba6a184dc6',
    // version_id: 'a5d7776f0c064a41b48c3ce039049f65',
    app.models
      .predict(
        '31025e019a18970a1acc55ba6a184dc6',
        'https://samples.clarifai.com/face-det.jpg'
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (error) {}
      );
  };

  render() {
    return (
      <div className='App'>
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/*
      <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;

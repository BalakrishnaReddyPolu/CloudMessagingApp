import React, { Component } from "react";
import firebase from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Sample push message",
    };
  }
  componentDidMount = () => {
    if(firebase.messaging.isSupported()){
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log(token);
        
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
  };
  render() {
    return <></>;
  }
}

export default App;

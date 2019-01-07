import Amplify, { API } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import React, { Component } from "react";
import "./App.css";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  post = async () => {
    console.log("calling api");
    const response = await API.post("myapi", "/items", {
      body: {
        id: "1",
        name: "hello amplify!"
      }
    });
    alert(JSON.stringify(response, null, 2));
  };
  get = async () => {
    console.log("calling api");
    const response = await API.get("myapi", "/items/object/1");
    alert(JSON.stringify(response, null, 2));
  };
  list = async () => {
    console.log("calling api");
    const response = await API.get("myapi", "/items/1");
    alert(JSON.stringify(response, null, 2));
  };
  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />
        <button onClick={this.post}>POST</button>
        <button onClick={this.get}>GET</button>
        <button onClick={this.list}>LIST</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);

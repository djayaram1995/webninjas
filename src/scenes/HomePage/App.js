import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mounted: true
    }
  }

  componentDidMount() {
    this.AnimatedText("code", ["understand", "design", "develop", "deploy"]);

  }

  componentWillUnmount() {
    this.AnimatedText();
  }
  AnimatedText(target, texts, changeInterval, updateInterval) {
    if (!target) {
      clearInterval(this.t1, this.t2);
    } else {
      let currentText = parseInt(Math.random() * texts.length);
      let areaText = texts[0];
      this.t1 = setInterval(() => {
        let c = parseInt(Math.random() * Math.max(texts[currentText].length, areaText.length));
        let s = texts[currentText][c];
        if (typeof s == 'undefined') s = " ";
        while (areaText.length < c) areaText += " ";
        let newText = (areaText.slice(0, c) + s + areaText.slice(c + 1)).trim();
        areaText = newText;
        document.getElementById(target).innerHTML = areaText.length === 0 ? "&nbsp;" : areaText;
      }, updateInterval ? updateInterval : 50);
      this.t2 = setInterval(() => {
        currentText = parseInt(Math.random() * texts.length);
      }, changeInterval ? changeInterval : 2500);
    }

  }

  render() {
    return (
      <div className="App">
        <div className="changingFont">
          We <span id="code">&nbsp;</span>
        </div>
      </div>
    );
  }
}

export default App;

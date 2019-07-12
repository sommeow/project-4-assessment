import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <section className="CircleSelector">
            <button>Select Circle 1</button>
            <button>Select Circle 2</button>
            <button>Select Circle 3</button>
            <button>Select Circle 4</button>
          </section>
          <section className="Circles">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

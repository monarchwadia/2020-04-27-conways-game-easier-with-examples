import React, { Component } from 'react';
import { ConwaysGameEngine } from '@monarchwadia/conways-game-engine';

class App extends Component {
  state = {
    engine: null,
    interval: null
  }

  componentDidMount() {
    const engine = new ConwaysGameEngine();
  
    engine.draw(3, 4);
    engine.draw(4, 5);
    engine.draw(5, 5);
    engine.draw(5, 4);
    engine.draw(5, 3);

    const interval = setInterval(() => {
      engine.step();
      this.forceUpdate();
    }, 1000)

    this.setState({ engine, interval });
  }

  render() {    
    if (!this.state.engine) {
      return null;
    }

    const world = this.state.engine.world.map((row, rowI) => (
      <div className="row" key={rowI}>
        {
          row.map((cell, cellI) => (
            <span className="cell" key={`${rowI}-${cellI}-${cell}`}> { cell ? "#" : "." } </span>
          ))
        }
      </div>
    ))
  
    return (
      <div className="App">
        { world }
      </div>
    );
  }
}

export default App;

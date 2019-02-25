import React, { Component } from 'react';
import { generateRandomNPC } from './generateRandomNPC';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      npcs: []
    }
  }
  render() {
    const { npcs } = this.state;

    const npcsList = npcs.reverse().map((npc) => {
      const { name, race, gender, feature1, feature2 } = npc;
      const id = `${name}`;
      return (<li key={id}>
        <p>
          {name} - {race} - {gender}
        </p>
        <p>
          {feature1} - {feature2}
        </p>

      </li>);
    })
    return (
      <div className="App">
        <div>
          <button onClick={this.handleGenerate.bind(this)}>Generate new NPC</button>
        </div>
        <div>
          NPCs:
        <ul>
            {npcsList}
          </ul>

        </div>
      </div>
    );
  }

  handleGenerate() {
    const npc = generateRandomNPC();
    const { npcs } = this.state;
    npcs.push(npc);
    this.setState({
      npcs
    })
  }
}

export default App;

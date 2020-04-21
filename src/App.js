import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );

    return (
      <div className="App">
        <input 
          value={this.state.searchField}
          type='search' 
          placeholder="Search mosnters" 
          onChange={e =>this.setState({ searchField: e.target.value })} />
        {this.state.searchField}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

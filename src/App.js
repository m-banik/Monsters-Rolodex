import React from 'react';
import CardList from "./components/card-list/card-list-component";
import { SearchBox } from "./components/searchBox/searchbox-component";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }))
      .catch(err => console.log("Error: ", err));
  }
  handleChange = e => {
    const searchField = e.target.value;
    this.setState({ searchField });
  };
  render() {
    const filterMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          value={this.state.searchField}
          placeholder="Search for a monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;

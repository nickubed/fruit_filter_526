import React from 'react';
import './App.css';
import FilterInput from './FilterInput'
import FruitList from './FruitList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fruitsToDisplay: props.fruits,
      filterValue: ''
    }
  }

  handleFilterChange(event) {
    event.preventDefault()
    const newFilterValue = event.target.value
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLowerCase().includes(newFilterValue.toLowerCase()))
      return {
        fruitsToDisplay: filteredFruitList,
        filterValue: newFilterValue
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I love Fruit</h1>
        <FilterInput value={this.state.filterValue} onChange={this.handleFilterChange.bind(this)}/>
        <FruitList fruits={this.state.fruitsToDisplay}/>
      </div>
    );
  }
}

export default App;

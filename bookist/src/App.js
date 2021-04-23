import './App.css';
import React, {Component} from 'react'
import Books from './components/Books'
import Shelf from './components/Shelf'
import data from './data'

class App extends Component{

  constructor(){
    super();
    this.state={
      filteredArray: data,
      temp: "temp",
      shelfArray: [],
      newArr: [],
      searchString: ""

    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.updateSearchBox = this.updateSearchBox.bind(this)
    this.updateFilteredArray = this.updateFilteredArray.bind(this)
  }

  clearShelf(){
    let clearArray =[];
    this.setState({shelfArray: clearArray})
  }

  addToShelf(book){
    console.log("add to shelf function called")
    let newShelf = [...this.state.shelfArray, book]
    this.setState({shelfArray: newShelf});
    
  }

  updateSearchBox(value){
    this.setState({searchString: value});
  }

  updateFilteredArray(){
    let tempArray = [];
    this.setState({filteredArray: data})
    tempArray = this.state.filteredArray.filter((el) => {
      return el.title.includes(this.state.searchString)
    })
    this.setState({filteredArray: tempArray})
  }

  resetSearch(){
    this.setState({filteredArray: data})
    this.setState({searchString: ""})
    console.log("reset search was called")
  }

  render(){
    console.log(this.state.shelfArray);
    return (
      <div className="App">
        <div className="header">Bookist</div>

        <div className="search-bar">
          <input value={this.state.searchString}
          onChange={(e) => this.updateSearchBox(e.target.value)}
          />
          <button onClick={() => this.updateFilteredArray(this.state.searchString)}>Search</button>
          <button onClick={() => this.resetSearch()}>Clear Search</button>
        </div>
        <div className="content">
          <Books goodBooks={this.state.filteredArray} addShelf={this.addToShelf}/>
          <Shelf bookList={this.state.shelfArray} clearShelf={this.clearShelf}/>
        </div>
        


      </div>
    );
  }

  
}

export default App;

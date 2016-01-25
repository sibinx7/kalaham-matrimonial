import React from "react";
class TopSearch extends React.Component{
  constructor(){
    super()
    let myKeyword;
  }
  searchInputChange = (e) => {
    this.myKeyword = this.refs.keyword.value;
  };
  searchButtonClick = (e) => {
   this.startSearch(this.myKeyword)
  };
  enterKeyPress = (e) => {
    if(e.which == 13){
      this.startSearch(this.myKeyword)
    }
  };
  startSearch =(value) => {
    console.log(value)
  };
  render(){
    return(
      <ul className="menu">
        <li><input type="search" placeholder="Search" onChange={this.searchInputChange} ref="keyword" onKeyUp={this.enterKeyPress}/></li>
        <li><button type="button" className="button" onClick={this.searchButtonClick}>Search</button></li>
      </ul>
    )
  }
}
export default TopSearch;
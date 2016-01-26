import React from "react";
import ReactDom,{Server} from "react-dom";
class TopSearch extends React.Component{
  constructor(){
    console.log("Initial")
    super()
    let myKeyword;
    this.state= {
      disabled: false,
      searchText: "Search"
    }
  }
  componentWillMount(){
    console.log("Component Will Mount")
  };
  componentDidMount(){
    console.log("Component Did Mount")
  };
  componentWillReceiveProps(){
    console.log("Component Will Receive Props")
  };
  componentWillUpdate(){
    console.log("Component Will Updpate")
  };
  componentDidUpdate(){
    console.log("Component Did Update")
  };
  componentWillUnmount(){
    console.log("Component Will Unmount")
  };
  searchInputChange = (e) => {
    this.myKeyword = this.refs.keyword.value;
  };
  searchButtonClick = (e) => {
   this.setState({disabled: true,searchText:"Searching..."})
   this.startSearch(this.myKeyword)
  };
  enterKeyPress = (e) => {
    if(e.which == 13){
      this.startSearch(this.myKeyword)
    }
  };
  startSearch =(value) => {
    console.log(value)
    // After Search 
    setTimeout(()=>{
      this.setState({disabled: false,searchText:"Search"})
      this.unMountIt()
    },5000)
    
  };
  unMountIt = () => {
    setTimeout(()=>{
      console.log("Unmount start")
      ReactDom.unmountComponentAtNode(document.getElementById('top-search-bar'))
    },3000)
  };
  render(){
    return(
      <ul className="menu">
        <li><input type="search" placeholder="Search" onChange={this.searchInputChange} ref="keyword" onKeyUp={this.enterKeyPress}/></li>
        <li><button disabled={(this.state.disabled)?true: false} type="button" className="button" onClick={this.searchButtonClick}>
         {this.state.searchText}
        </button></li>
        <CartIconOnTopBar/>
      </ul>
    )
  }
}
class CartIconOnTopBar extends React.Component{
  constructor(){
    super()
    this.state = {
      cartItemCount: 0
    }
  }
  openClassModal = () => {
    
  };
  render(){
    return(
        <li>
          <a href="#" onClick={this.openCartModal} className="cart-element">                     
            <i className="fi-shopping-cart"></i>
            <span className="cart-count"> {this.state.cartItemCount} </span>  
          </a>
        </li>
    )
  }
}
export default TopSearch;
import React from "react";
import ProductApis from "../../fakeApi/fake-product-api"
class ProductGallery extends React.Component{
  constructor(){
    super()
    this.productItems = new ProductApis();
    this.state = {
      productItems: this.productItems.getFakeProducts()
    }    
  };
  updateMyProducts(keyword) {
    this.setState({
      productItems: this.productItems.getFakeProducts(keyword)
    })
  };
  render(){
    let productItem;
    if(this.state.productItems.length > 0){
      productItem = this.state.productItems.map(function(value,index){      
        return(
          <div className="small-12 medium-4 large-3 columns" key={index}>
            <EachProductItem details={value}/>
          </div>
        )
      })
    }
    
    return(
      <div className="products">
        <div className="row">
          <div className="small-12 columns">
            <input type="button" className="button" onClick={this.updateMyProducts.bind(this,"motorola")} value="Motoroala"/>
            <input type="button" className="button" onClick={this.updateMyProducts.bind(this,"sony")} value="Sony"/>
            <input type="button" className="button" onClick={this.updateMyProducts.bind(this,"lenovo")}  value="Lenovo"/>
          </div>
        </div>
        <div className="row">
          {productItem}
        </div>
      </div>
    )
  }
}
class EachProductItem extends React.Component{
  static propTypes = {
    details: React.PropTypes.object 
  };
  constructor(){
    super()
  }
  componentWillReceiveProps(nextProps){
    console.log("Props changes due to change in Parent")
  }
  shouldComponentUpdate(){
    return true 
  }
  render(){
    return(
      <div className="each-product clearfix">
        <img src={this.props.details.image} className="thumbnail"/>
        <a href={this.props.details.urls}>
          <h5>{this.props.details.name}</h5>
          <p>Manfacture:{this.props.details.manufacture}</p>
        </a>                   
        <div className="success label float-right">{this.props.details.price}</div>
      </div>
    )
  }
}
export default ProductGallery;
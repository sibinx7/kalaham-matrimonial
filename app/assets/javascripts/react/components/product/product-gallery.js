import React from "react";
import ProductApis from "../../fakeApi/fake-product-api"
class ProductGallery extends React.Component{
  constructor(){
    super()
    var productItems = new ProductApis();
    this.state = {
      productItems: productItems.getFakeProducts()
    }    
  }
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
          {productItem}
        </div>
      </div>
    )
  }
}
class EachProductItem extends React.Component{
  render(){
    return(
      <div className="each-product clearfix">
        <img src={this.props.details.image} className="thumbnail"/>
        <a href={this.props.details.urls}>
          <h5>{this.props.details.name}</h5>
        </a>                   
        <div className="success label float-right">{this.props.details.price}</div>
      </div>
    )
  }
}
export default ProductGallery;
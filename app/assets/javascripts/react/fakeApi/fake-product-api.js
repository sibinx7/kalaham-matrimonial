class ProductApis{
  constructor(){
    this.productItems = [];
    for(var i=0;i<12;i++){
      this.productItems.push({
        name: "Product "+i,
        image: "http://placehold.it/340x400",
        price: (100+(i*2)),
        urls: '/welcome/product/'+i
      })
    }
  }
  getFakeProducts = () => {
    return this.productItems
  };
}
export default ProductApis;
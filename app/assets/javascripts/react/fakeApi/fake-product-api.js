class ProductApis{
  constructor(){
    this.manufacturesList = ["motorola","sony","lenovo"];
    this.productItems = [];
    for(var i=0;i<10;i++){
      this.productItems.push({
        name: "Product "+i,
        image: "http://placehold.it/340x400",
        price: (100+(i*2)),
        urls: '/welcome/product/'+i,
        manufacture: (this.manufacturesList[i%3])
      })
    }
  }
  getFakeProducts = (manufacture = "") => {

    if (manufacture.length == 0 || (this.manufacturesList.indexOf(manufacture)) == -1){
      return this.productItems  
    }else{
      var filtered = [];
      this.productItems.map((value)=>{
        if(value.manufacture == manufacture){
          filtered.push(value)
        }
      });
      return filtered
    }
    
  };
}
export default ProductApis;
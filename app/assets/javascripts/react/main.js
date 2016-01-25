import React from 'react';
import ReactDom from "react-dom";

import Sidebar from "./components/sidebar";
import TopSearch from "./components/top-header";
import ProductGallery from "./components/product/product-gallery";
import Pagination from "./components/pagination";

ReactDom.render( <Sidebar />, document.getElementById('sidebar-elements'))
ReactDom.render(<TopSearch />, document.getElementById('top-search-bar'))  
  
/**
 * Some section are specific to some pages, so first check that those section are
 * available to current page , equalent to jquery `element.length`
 * 
 */

var productSectionElement = document.querySelectorAll('#product-section'); 
if(productSectionElement.length > 0){
  ReactDom.render(<ProductGallery/>, document.getElementById('product-section'))
}
var paginationElement = document.querySelectorAll('#pagination');
if(paginationElement.length > 0){
  ReactDom.render(<Pagination/>, document.getElementById('pagination'))
}


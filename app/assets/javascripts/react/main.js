import React from 'react';
import ReactDom from "react-dom";
import Sidebar from "./components/sidebar";
import TopSearch from "./components/top-header";


ReactDom.render( <Sidebar />, document.getElementById('sidebar-elements'))
ReactDom.render(<TopSearch />, document.getElementById('top-search-bar'))  
  

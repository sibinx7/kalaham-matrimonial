import React from 'react';
import ReactDom from "react-dom";
import Sidebar from "./components/sidebar";

$(document).ready(function(){
  ReactDom.render( <Sidebar />, document.getElementById('sidebar-elements'));  
})

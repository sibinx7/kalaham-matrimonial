import React from "react";
import ATag from './html_components'
class Sidebar extends React.Component{
  constructor(){
    super()
    this.state = {
      active: false 
    }
  }
  render(){
    return(
      <div className="sidebar">
        <div className="vertical menu">
          <SidebarLinks href="#" name="Motorola"/>
          <SidebarLinks href="#" name="Sony"/>
          <SidebarLinks href="#" name="Lenovo"/>
          <SidebarLinks href="#" name="Asus"/>
          <SidebarLinks href="#" name="Dell"/>
        </div>
      </div>
    )
  }
}
class SidebarLinks extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <li>
        <ATag href={this.props.href} name={this.props.name}/>
      </li>
    )
  }
}

export default Sidebar;

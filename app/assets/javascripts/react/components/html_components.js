import React from 'react';

class ATag extends React.Component{
  render(){
    return(
      <a href={this.props.href}>{this.props.name}</a>
    )
  }
}
export default ATag;
class ATagWithIcon extends React.Component{
  render(){
    return(
      <a href={this.props.href}>
      <span className={this.props.iconClass}></span>
      {this.props.name}
      </a>
    )
  }
}
export default ATagWithIcon;
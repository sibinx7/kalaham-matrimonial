import React from "react";
import ATag from "./html_components";
class Pagination extends React.Component{
  render(){
    return(
      <ul className="pagination text-center" role="navigation" aria-label="Pagination">
          <li className="pagination-previous disabled">Previous</li>
          <li className="current"><span className="show-for-sr">You're on page</span> 1</li>
          <li><ATag href="#" name="2" ariaLabel="Page 2"/></li>
          <li><ATag href="#" name="3" ariaLabel="Page 3"/></li>
          <li><ATag href="#" name="4" ariaLabel="Page 4"/></li>
          <li className="ellipsis"></li>
          <li><ATag href="#" name="13" ariaLabel="Page 13"/></li>
          <li><ATag href="#" name="14" ariaLabel="Page 14"/></li>
          <li className="pagination-next"><ATag href="#" name="Next" ariaLabel="Next Page"/></li>
        </ul>
    )
  }
}
export default Pagination;
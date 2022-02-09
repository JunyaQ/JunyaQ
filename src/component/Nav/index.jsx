import React from "react";
function Nav(props){
 
const navbar = ["Main","About","Portfolio","Contact","Resume"];
    return (
<section className="nav-bar">
<ul className="barul">
  {navbar.map(item=>(
    <li className="barli" key={item}>
      <a href={"#"+item}
      onClick={()=> props.handlePageChange(item)}
      className={props.currentPage === item ? 'nav-link active' : 'nav-link'}>
        {item}
      </a>
    </li>
  ))}
</ul>
</section>
 )
}
export default Nav;
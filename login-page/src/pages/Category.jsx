import React, { useState } from "react"
import "./Category.css"
import Logo from "../resources/Super app.png"

function Category() {

    const [cards] = useState([
        
    ])
    return(
        <div className="main">
            <div className="leftpanel">
                <div className="logo"><img className="logo" src={Logo} alt="" /></div>
                <div className="bigtext">Choose your entertainment category</div>
            </div>
            <div className="rightpanel">cards go here</div>
        </div>
        
    )
    
}

export default Category
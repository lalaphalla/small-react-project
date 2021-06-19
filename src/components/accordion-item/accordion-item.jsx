import React, { useState } from 'react'

import './accordion-item.scss'

const AccordionItem = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return(
        <article className="question">
        <header>
            <h4>{title} </h4>
            <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
             {!showInfo ? "+" : "-" }
            </button>
        </header>
        <p>
            {showInfo && info}
        </p>
        
        </article>
    )
}

export default AccordionItem
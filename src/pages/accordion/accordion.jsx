import React from 'react'
import AccordionPreview from '../../components/accordion-preview/accordion-preview'

import './accordion.scss'

const AccordionPage = () => {

    return(
        <div className="accordion-page">
        <div className="main">
            <div className="container">
                <h2>Questions and Answers about Login</h2>
                <AccordionPreview />
            </div>
        </div>
        </div>
        
    )
}

export default AccordionPage 
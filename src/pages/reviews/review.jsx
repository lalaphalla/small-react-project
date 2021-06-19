import React from 'react'
import ReviewPreview from '../../components/review-preview/review-preview'
import './review.scss'
const ReviewPage = () => {
    
    return(
        <div className="main">
            <section className="container">
                <div className="title">
                    <h2>Our review</h2>
                </div>            
                
            <ReviewPreview />
            </section>

        </div>        
    )
}

export default ReviewPage
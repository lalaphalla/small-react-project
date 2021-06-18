import React from 'react'
import TourItem from '../tour-item/tour-item'

import './tour-preview.scss'

const TourPreview = ({ tours, removeTour}) => {
    return(
        <section>
            <div className="title">
                <h2>Our Tour</h2>
            </div>
            <div>
                {tours.map((tour) => {
                    return <TourItem key={tour.id} {...tour} removeTour={removeTour}/>
                })}
            </div>
        </section>
    )
}
export default TourPreview
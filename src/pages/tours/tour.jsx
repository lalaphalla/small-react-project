import React, {useState, useEffect} from 'react'
import TourPreview from '../../components/tour-preview/tour-preview'

import './tour.scss'

const url = 'https://course-api.com/react-tours-project'
const TourPage = () => {
    const [tours, setTours] = useState([])

    const removeTour = (id) =>{
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }
    const fetchTours = async () =>{
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setTours(tours)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTours()        
    }, [])

    if(tours.length === 0){
        return(
            <div className="title">
                <h2>no tours left</h2>
                <button className="btn" onClick={()=>fetchTours()}>Refresh</button>
            </div>
        )
    }

    return (        
        <TourPreview tours={tours} removeTour = {removeTour} />
    )
}

export default TourPage
import React from 'react'



export default function Journal(props){




    const {title,
        location,
        googleMapsUrl,
        startDate,
        endDate,
        description,
        imageUrl} = props

    return (

        <div className='locationContainer'>
            <img className='locationImage' src={imageUrl} />
            <div className='locationInfoContainer'>
                <span className='destinationContainer'>
                    <img className='locationSvg' src='/public/location.svg' /> 
                    <h5 className='locationName'>{location}</h5>
                    <a className='locationGoogleMapLink' href={googleMapsUrl}>View on Goolge Maps</a>
                </span>
                <h1 className='locationTitle'>{title}</h1>
                <span className='locationDateContainer'>
                    <div className="locationStartDate">{startDate} - </div> 
                    <div className="locationEndDate"> {endDate}</div>
                </span>
                <p className="locationDescription">{description}</p>
                
            </div>
       
        </div>
        
    )
     } 


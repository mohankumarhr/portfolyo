import React from 'react'
import "../CSS/services.css"
import ScrollAnimation from './ScrollAnimation'

function Services(props) {

    ScrollAnimation('fadeinup')

    return (
        <div className='services-section' id='services'>
            <h2>My Services</h2>
            {
                props.services.map((item) => {
                    return item.enabled && <div className='service'>
                        <div className='service-info fadeinup'>
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <div className='service-img'>
                            <div className='service-img-wrapper'>
                                <img src={item.image.url} alt=''></img>
                                <p className='price'>{item.charge}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Services
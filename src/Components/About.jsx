import React, { useState } from 'react'
import "../CSS/about.css"
import ScrollAnimation from './ScrollAnimation'

function About(props) {

    const [subTitle] = useState(props.about.subTitle.split(" "))

        ScrollAnimation('fadeinup')

    return (
        <div className='about-section'  id="about">
            <div className='about-section-container'>
                <div className='about-img-cont'>
                    <div className='badge' style={{ backgroundImage: `url(${props.about.avatar.url})` }}>
                        <div className='text'>’Hallo!</div>
                    </div>
                </div>
                <div className='about-info-cont'>
                    <div class="subtitle-wrapper fadeinup">
                        <p>{subTitle[0]} {subTitle[1]}</p>
                        <div class="words">
                            <span>{subTitle[2]} {subTitle[3]}</span>
                            <span>{subTitle[4]} {subTitle[5]}</span>
                            <span>{subTitle[7]} {subTitle[8]}</span>
                            <span>{subTitle[4]} {subTitle[5]}</span>
                            <span>{subTitle[2]} {subTitle[3]}</span>
                        </div>
                    </div>
                    <div className='about-desc fadeinup'>
                        <p>{props.about.description}</p>
                    </div>
                </div>
            </div>
            <p className='about-quote fadeinup'>❝{props.about.quote}❞</p>
        </div>
    )
}

export default About
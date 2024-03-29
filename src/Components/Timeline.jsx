import React, { useState } from 'react'
import "../CSS/timeline.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function Timeline(props) {

    const [expand, setExpand] = useState(false)
    const [expandIndex, setExpandIndex] = useState(null)

    const handleExpand = (index)=>{
        if (expandIndex === index) {
            setExpand(false)
            setExpandIndex(null)
        }else{
            setExpand(true)
            setExpandIndex(index)
        }
    }

    return (
        <div className='timeline-section' id='timeline'>
            <h2>My Story</h2>
            <div className='timeline-wrapper'>
                <div className='timeline-container'>
                <h3>Education</h3>
                    {props.timeline.map((item,index) => {
                        return item.enabled && item.forEducation && <div className='timeline'>
                            <div className='timeline-header'>
                                <h3 className='company'>{item.company_name}</h3>
                                <ExpandCircleDownIcon onClick={()=>{handleExpand(index)}} className='expandicon' />
                            </div>
                            <div className={`${'timeline-details'} ${expand&&index===expandIndex&&'open'}`}>
                            <div className='position'>
                                <p>{item.jobTitle}</p>
                                <div className='data-loc'> <p>{item.startDate.split("T")[0]}</p> <p>{item.endDate.split("T")[0]},</p> <p>{item.jobLocation}</p></div>
                            </div>
                            <p className='summary'>{item.summary}</p>
                            <ul className='position-desc'>
                                {item.bulletPoints.map((point) => {
                                    return <li className='desc-points'>{point}</li>
                                })}
                            </ul>
                            </div>
                        </div>
                    })}
                </div>
                <div className='timeline-container'>
                <h3>Experience</h3>
                    {props.timeline.map((item,index) => {
                        return item.enabled && !item.forEducation && <div className='timeline'>
                            <div className='timeline-header'>
                                <h3 className='company'>{item.company_name}</h3>
                                <ExpandCircleDownIcon onClick={()=>{handleExpand(index)}} className='expandicon' />
                            </div>
                            <div className={`${'timeline-details'} ${expand&&index===expandIndex&&'open'}`}>
                                <div className='position'>
                                    <p>{item.jobTitle}</p>
                                    <div className='data-loc'> <p>{item.startDate.split("T")[0]}</p> <p>{item.endDate.split("T")[0]},</p> <p>{item.jobLocation}</p></div>
                                </div>
                                <p className='summary'>{item.summary}</p>
                                <ul className='position-desc'>
                                    {item.bulletPoints.map((point) => {
                                        return <li className='desc-points' >{point}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Timeline
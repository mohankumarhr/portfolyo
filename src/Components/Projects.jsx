import React from 'react'
import "../CSS/projects.css"

function Projects(props) {


    return (
        <div className='project-section' id="projects">
        <h1>My recent works</h1>
           <div class="project-wrapper">
                {props.projects.map((item)=>{
                  return  item.enabled&&<div class="project-card">
                    <img src={item.image.url} alt=''></img>
                    <div class="project-descriptions">
                        <h1>{item.title}</h1>
                        <div className='techstack'>
                            {item.techStack.map((tech)=>{
                                return <p className='tech'>{tech}</p>
                            })}
                        </div>
                        <button>
                            View More
                        </button>
                    </div>
                </div>
                })}
            </div>
        </div>
    )
}

export default Projects
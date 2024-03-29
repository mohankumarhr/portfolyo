import React, { useState } from 'react'
import "../CSS/home.css"
import axios from 'axios'

function Home(props) {

    const [about, setAbout] = useState(null)



    useState(() => {
        console.log("about", about)
        const fetachdata = () => {
            axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
                .then((response) => {
                    if (response.data.success) {
                        console.log("home", response.data.user.about);
                        setAbout(response.data.user.about)
                        console.log("about", about)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetachdata()
        console.log("about", about)
    })


    return (
        <div className='home-conatainer'>
            <div className='home-wrapper'>
                <div className="context">
                    <div className='info-section'>
                        {/* <h1 class="home-title">{props.about.name}</h1>
                        <h2>a {props.about.title}</h2> */}
                        <div class="info-container">
                            <div class="effect-wrap">
                                <div>
                                    <h1 class="effect-block">
                                        <span>{props.about.name}</span>
                                    </h1>
                                    <h1 class="effect-block" id="another">
                                        <span>a {props.about.title}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='skill-section'>
                            <p>My <br></br>Top <br></br>Skills</p>
                            <div className='skill-container'>
                                {props.skills.map((item)=>{
                                    return item.enabled&&<div className='skills'>
                                    <div className='skill-img-cont'>
                                    <img src={item.image.url} alt=''></img>
                                    </div>
                                        <p>{item.name}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='image-section'>
                        {/* <img src={props.about.avatar.url}  alt='photo'></img> */}
                        <div id="stripped" style={{ backgroundImage: `url(${props.about.avatar.url})` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
                                <polyline points="0,154 131,0 0,348 269,0 0,562 437,0 
	                        0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
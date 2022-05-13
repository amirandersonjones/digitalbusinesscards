import React from "react"
import ME from '../assets/amirprofessionalphoto.jpg'

export default function Info(){
    return(
        <div className="info__container">
        <img src={ME} alt=" about_me image" width="40px"/>
        <h3>Amir Jones</h3>
        <h4>Frontend Developer/UX Developer</h4>
        <h6>amircodes4u.com</h6>
        <button>Email</button>
        <button>Linkedin</button>
        </div>
    )
}
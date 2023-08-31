import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlayFill } from 'react-icons/bs'
import "./Cover.css"

import Caratula from "../../assets/images/Caratula.jpg"

export default function Cover() {
    return (
        <div className="homepage__main_container">
            <div className="homepage__cover_container">
                <img className="homepage__cover" src={Caratula}>
                </img>
                <Link to="" className='homepage__view_more_info'>Ver info</Link>
                <Link to="" className='homepage__play_button'>
                    <BsPlayFill
                    className='homepage__play_button--svg'/>
                </Link>
            </div>
        </div>
    )
}

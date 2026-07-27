import React from 'react'
import Header from './Header'
import img2 from '../../assets/images/bg_img.png'
import '../../Css/landingpage.css'
import { LuHandshake, LuTarget, LuUsers } from "react-icons/lu";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


const Sec1 = () => {
    return (
        <div>
            <div className='bg_overlay_set'>
                <img src={img2} className='w-100 img_set' alt="" />
            </div>
            <div className='d-flex justify-content-between container text-center py-5' style={{fontSize:"50px",fontWeight:"600"}}>
                <div>
                <LuUsers style={{color:"#009966"}}/>
                <h3 className='pt-2'>500+</h3>
                <h5>Valunteers</h5>
                </div>
                <div>
               <LuTarget style={{color:"#009966"}}/>
               <h3 className='pt-2'>150+</h3>
               <h5>Project Completed</h5>
                </div>
                <div>
                 <FaRegHeart style={{color:"#009966"}}/>
                 <h3 className='pt-2'>10,000+</h3>
                 <h5>Tree Plantation</h5>
                </div>
                <div>
                 <LuHandshake style={{color:"#009966"}}/>
                 <h3 className='pt-2'>5+</h3>
                 <h5>Team</h5>
                </div>
             </div>
        </div>

    )
}

export default Sec1
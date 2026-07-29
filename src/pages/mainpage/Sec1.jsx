import React from 'react'
import Header from './Header'
import img2 from '../../assets/images/bg_img.png'
import '../../Css/landingpage.css'
import { LuHandshake, LuTarget, LuUsers } from "react-icons/lu";
import { MdFoundation } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaAward, FaSeedling } from 'react-icons/fa';


const Sec1 = () => {
    return (
       
        <div className='mb-5'>
    <div
        className='bg_overlay_set'
        id='main'
        data-aos="zoom-in"
    >
        <img
            src={img2}
            className='w-100 img_set'
            alt=""
        />
    </div>

    <div
        className='row container m-auto text-center py-5'
        style={{ fontSize: "50px", fontWeight: "600" }}
    >

        <div
            className='col-lg-3 col-md-6 col-6'
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <MdFoundation style={{ color: "#009966" }} />
            <h3 className='pt-2'>૨૦૧૮</h3>
            <h5>સ્થાપિત</h5>
        </div>

        <div
            className='col-lg-3 col-md-6 col-6'
            data-aos="fade-up"
            data-aos-delay="250"
        >
            <LuHandshake style={{ color: "#009966" }} />
            <h3 className='pt-2'>૩૦૦+</h3>
            <h5>સ્વયંસેવક</h5>
        </div>

        <div
            className='col-lg-3 col-md-6 col-6'
            data-aos="fade-up"
            data-aos-delay="400"
        >
            <FaSeedling style={{ color: "#009966" }} />
            <h3 className='pt-2'>૧૦,૦૦,૦૦૦+</h3>
            <h5>વૃક્ષારોપણ</h5>
        </div>

        <div
            className='col-lg-3 col-md-6 col-6'
            data-aos="fade-up"
            data-aos-delay="550"
        >
            <FaAward style={{ color: "#009966" }} />
            <h3 className='pt-2'>૧૦+</h3>
            <h5>પુરસ્કાર વિજેતા</h5>
        </div>

    </div>
</div>

    )
}

export default Sec1
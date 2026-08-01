import React from 'react'
import Header from './Header'
import img2 from '../../assets/images/bg_img.png'
import '../../Css/landingpage.css'
import { LuHandshake, LuTarget, LuUsers } from "react-icons/lu";
import { MdFoundation } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaAward, FaSeedling } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const Sec1 = () => {
    const { t, i18n } = useTranslation();
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
                    <h3 className='pt-2'>{t("year")}</h3>
                    <h5>{t("establishment")}</h5>
                </div>

                <div
                    className='col-lg-3 col-md-6 col-6'
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <LuHandshake style={{ color: "#009966" }} />
                    <h3 className='pt-2'>{t("totalvolunteer")}</h3>
                    <h5>{t("volunteer")}</h5>
                </div>

                <div
                    className='col-lg-3 col-md-6 col-6'
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <FaSeedling style={{ color: "#009966" }} />
                    <h3 className='pt-2'>{t("totalplant")}</h3>
                    <h5>{t("plantation")}</h5>
                </div>

                <div
                    className='col-lg-3 col-md-6 col-6'
                    data-aos="fade-up"
                    data-aos-delay="550"
                >
                    <FaAward style={{ color: "#009966" }} />
                    <h3 className='pt-2'>{t("totalaward")}</h3>
                    <h5>{t("award")}</h5>
                </div>

            </div>
        </div>

    )
}

export default Sec1
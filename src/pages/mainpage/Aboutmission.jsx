import React from 'react'
import mission from '../../assets/images/mission.png'
import { useTranslation } from 'react-i18next';

const Aboutmission = () => {
    const { t , i18n } = useTranslation();

    return (
        <div  id='about' className='my-5'>
            <div style={{ background: "#F9FAFB" }} className=''  >
                <div className='container row m-auto align-items-center py-5'>
                    <div className='col-lg-6 col-12 px-lg-5' data-aos="fade-up-right">
                        <h2 className='py-2 fw-bold mission_heading'>{t("aboutgreenhead")}</h2>
                        <p className=' lh-lg'>{t("aboutdetail")}</p>
               

                    </div>
                    <div className='col-lg-6 col-12 p-3' data-aos="fade-up-left">
                        <img src={mission} className='custom_width' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutmission
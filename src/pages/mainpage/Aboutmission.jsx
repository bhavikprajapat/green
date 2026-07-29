import React from 'react'
import mission from '../../assets/images/mission.png'

const Aboutmission = () => {
    return (
        <div  id='about' className='my-5'>
            <div style={{ background: "#F9FAFB" }} className=''  >
                <div className='container row m-auto align-items-center py-5'>
                    <div className='col-lg-6 col-12 px-lg-5' data-aos="fade-up-right">
                        <h2 className='py-2 fw-bold mission_heading'>ગ્રીન આર્મી વિશે</h2>
                        <p className=' lh-lg'>વધુ હરિયાળું અને ટકાઉ ભારત બનાવવાના અમારા અભિયાનના ભાગરૂપે, અમે દરરોજ વૃક્ષારોપણની પ્રવૃત્તિઓ હાથ ધરીએ છીએ જે પર્યાવરણમાં યોગદાન આપે છે અને આબોહવા પરિવર્તન સામે લડવામાં મદદ કરે છે. આ વીડિયોમાં, તમે અમારા સમર્પિત સ્વયંસેવકોને વૃક્ષો વાવવા, સમુદાયોને જાગૃત કરવા અને દરેકને અમારી સાથે જોડાવા માટે પ્રોત્સાહિત કરવા માટે સાથે મળીને કામ કરતા જોશો.</p>
                <p>
                        સાથે મળીને, આપણે પરિવર્તન લાવી શકીએ છીએ! ચાલો ભારતને હરિયાળું બનાવીએ.</p>

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
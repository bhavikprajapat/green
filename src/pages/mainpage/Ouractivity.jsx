import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images/youth.jpg'
import img2 from '../../assets/images/One-Tree-Planted.jpg'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const Ouractivity = () => {
    return (
        <div className='container mb-5'> 
            <div className='text-center'>
                <h3>આગામી કાર્યક્રમો</h3>
                <h5>અમારા સામુદાયિક કાર્યક્રમોમાં જોડાઓ અને સકારાત્મક પરિવર્તન લાવો.</h5>
            </div>
            <div className='row pt-5 g-5 '>
             <div className='col-lg-4 col-md-6 '>
             <Card className='h-100'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='fw-bold'>યુવા શિક્ષણ કાર્યશાળા</Card.Title>
        <Card.Text>
       STEM વિષયો, વિવેચનાત્મક વિચારસરણી અને આવરી લેતા યુવાનો માટે ઇન્ટરેક્ટિવ શિક્ષણ સત્રો
        </Card.Text>
        <p className='fw-bold'><FaRegCalendarAlt /> ૨૨ ફેબ્રુઆરી, ૨૦૨૬ </p>
        <p className='fw-bold'><IoLocationOutline /> ગ્રીન આર્મી બિલ્ડિંગ </p>
        
      </Card.Body>
    </Card>
           </div>
            <div className='col-lg-4 col-md-6 '>
             <Card className='h-100'>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>વૃક્ષારોપણ</Card.Title>
        <Card.Text>
         આપણા ગૃહમંત્રી અને અન્ય સ્વયંસેવકો સાથે તાપી નદીના કિનારે વૃક્ષારોપણ
        </Card.Text>
        <p className='fw-bold'><FaRegCalendarAlt /> ૨૨ ફેબ્રુઆરી, ૨૦૨૬ </p>
        <p className='fw-bold'><IoLocationOutline /> ગ્રીન આર્મી બિલ્ડિંગ </p>
      </Card.Body>
    </Card>
           </div>
           </div>
          </div>
//         <div style={{ background: "#F9FAFB" }} className="py-5">
//   <div className="container">

//     <div className="text-center mb-5">
//       <h2 className="fw-bold">અમારી પ્રવૃત્તિઓ</h2>
//       <p className="text-muted">
//         અમે જે વિવિધ પહેલો પર કામ કરી રહ્યા છીએ તે વિશે જાણો.
//       </p>
//     </div>

//     <div className="row g-4">

//       {/* Left Big Card */}
//       <div className="col-lg-6">
//         <div className="activity-card big-card">
//           <img src={img} alt="" />

//           <div className="overlay">
//             <h3>વૃક્ષારોપણ અભિયાન</h3>
//             <p>દરરોજ નવા વિસ્તારોમાં જઈને વૃક્ષો વાવવાનું પવિત્ર કાર્ય.</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="col-lg-6">

//         <div className="row g-4">

//           <div className="col-md-6">
//             <div className="activity-card small-card">
//               <img src={img2} alt="" />

//               <div className="overlay">
//                 <h4>પર્યાવરણ જાગૃતિ</h4>
//                 <p>શાળા અને કોલેજોમાં સેમિનાર.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="activity-card small-card">
//               <img src={img2} alt="" />

//               <div className="overlay">
//                 <h4>સમાજ સેવા</h4>
//                 <p>માનવતાવાદી કાર્ય અને સહાય.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="activity-card bottom-card">
//               <img src={img} alt="" />

//               <div className="overlay">
//                 <h3>ગ્રીન કેમ્પેઈન</h3>
//                 <p>ડિજિટલ અને ઓફલાઇન વૃક્ષ જાગૃતિ અભિયાન.</p>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>

//     </div>
//   </div>
// </div>
    )
}

export default Ouractivity
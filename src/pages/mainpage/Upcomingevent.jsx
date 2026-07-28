import React from 'react'
import img from '../../assets/images/youth.jpg'
import img2 from '../../assets/images/One-Tree-Planted.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
const Upcomingevent = () => {
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
    )
}

export default Upcomingevent
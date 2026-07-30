import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images/youth.jpg'
import img2 from '../../assets/images/One-Tree-Planted.jpg'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Ouractivity = () => {
  const {t} = useTranslation()
    return (
  
     <div style={{ background: "#F9FAFB" }} className="my-5">
      <div className="container py-5" id="upcoming">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="fw-bold">{t("upcomingevent")}</h2>
          <h5>{t("upcomingsubtitle")}</h5>
        </div>

        {/* Cards */}
        <div
          className="row pt-5 g-5"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          {/* Card 1 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Card className="event-card h-100">
              <Card.Img variant="top" src={img} />

              <Card.Body>
                <Card.Title className="fw-bold">
                  {t("upcomingcart1title")}
                </Card.Title>

                <Card.Text>
                  {t("upcomingcart1subtitle")}
                </Card.Text>

                <p className="fw-bold">
                  <FaRegCalendarAlt className="me-2" />
                  {t("upcomingcart1_date")}
                </p>

                <p className="fw-bold">
                  <IoLocationOutline className="me-2" />
                  {t("upcomingcart1_venue")}
                </p>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Card className="event-card h-100">
              <Card.Img variant="top" src={img2} />

              <Card.Body>
                <Card.Title className="fw-bold">
                  {t("upcomingcart2title")}
                </Card.Title>

                <Card.Text>
                  {t("upcomingcart2subtitle")}
                </Card.Text>

                <p className="fw-bold">
                  <FaRegCalendarAlt className="me-2" />
                  {t("upcomingcart2_date")}
                </p>

                <p className="fw-bold">
                  <IoLocationOutline className="me-2" />
                  {t("upcomingcart2_venue")}
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
    </div>
    )
}

export default Ouractivity
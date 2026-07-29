import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { ImLeaf } from "react-icons/im";
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        // <div className='bg-black text-white p-5'>
        //     <div className='container'>
        //         <div className='d-lg-flex justify-content-between'>
        //             <div >
        //                 <h5 className='pb-3 fw-bold'> <ImLeaf style={{ color: "green" }} /> ગ્રીન આર્મી ચેરીટેબલ ટ્રસ્ટ, સુરત</h5>
        //                 <p >ટકાઉ પહેલ અને સંવેદનશીલ કાર્યો દ્વારા આપણા સમુદાયમાં <br /> સકારાત્મક પરિવર્તન લાવવા માટે સમર્પિત.</p>
        //             </div>
        //             <div>
        //                 <div>
        //                     <h6><MdOutlineEmail style={{ fontSize: "28px", color: "#009966" }} className='mx-2' />  <a
        //                         href="https://mail.google.com/mail/?view=cm&fs=1&to=greenarmycharitabletrust@gmail.com"
        //                         className="text-decoration-none"
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                         style={{ color: "white" }}
        //                     >
        //                         greenarmycharitabletrust@gmail.com
        //                     </a></h6>
        //                 </div>
        //                 <div>
        //                     <h6><FiPhone style={{ fontSize: "28px", color: "#009966" }} className='mx-2' /> 63535-37092 // 88669-37092</h6>

        //                 </div>
        //                 <div className=''>
        //                     <h6><MdLocationOn style={{ fontSize: "28px", color: "#009966" }} className='mx-2' /><a
        //                         href="https://share.google/jpKCooM1fvg24oe62"
        //                         className="text-decoration-none"
        //                         target="_blank"
        //                         rel="noopener noreferrer"
        //                         style={{ color: "white" }}
        //                     >
        //                         ચોથો માળ–434, સ્કાઈવ્યુ બિલ્ડિંગ
        //                         સ્વામિનારાયણ  બસ સ્ટોપની બાજુમાં,
        //                         શ્યામધામ મંદિર (કામરેજ તરફ), સુરત
        //                     </a> </h6>

        //                 </div>



        //             </div>
        //             <div>
        //                 <h6>Follow Us :</h6>
        //                 <ul className='d-flex list_set p-0'>
        //                     <li><a href="https://www.instagram.com/greenarmysurat/?hl=en"><FaInstagram /></a></li>
        //                     <li><a href="https://www.facebook.com/share/16XRD1cEwf/"><FiFacebook /></a></li>
        //                     <li><a href="https://youtube.com/@greenarmycharitabletrust?si=2Z1SJPr9MaG-A5Cb"><BsYoutube /></a></li>
        //                 </ul>
        //             </div>
        //         </div>

        //     </div>
        // </div>
//         <div className="bg-black text-white py-5" id='contact'>
//   <div className="container">
//     <div className="row gy-5">

//       {/* Left */}
//       <div className="col-lg-4 col-md-6 col-12">
//         <h5 className="fw-bold mb-3">
//           <ImLeaf className="me-2 text-success" />
//           ગ્રીન આર્મી ચેરીટેબલ ટ્રસ્ટ, સુરત
//         </h5>

//         <p className="mb-0">
//           ટકાઉ પહેલ અને સંવેદનશીલ કાર્યો દ્વારા આપણા સમુદાયમાં
//           સકારાત્મક પરિવર્તન લાવવા માટે સમર્પિત.
//         </p>
//       </div>

//       {/* Contact */}
//       <div className="col-lg-5 col-md-6 col-12">

//         <div className="d-flex align-items-start mb-3">
//           <MdOutlineEmail
//             className="me-3 flex-shrink-0 text-success"
//             size={26}
//           />

//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=greenarmycharitabletrust@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-decoration-none text-white text-break"
//           >
//             greenarmycharitabletrust@gmail.com
//           </a>
//         </div>

//         <div className="d-flex align-items-start mb-3">
//           <FiPhone
//             className="me-3 flex-shrink-0 text-success"
//             size={24}
//           />

//           <div>
//             <a
//               href="tel:+916353537092"
//               className="text-decoration-none text-white"
//             >
//               +91 63535 37092
//             </a>

//             <br />

//             <a
//               href="tel:+918866937092"
//               className="text-decoration-none text-white"
//             >
//               +91 88669 37092
//             </a>
//           </div>
//         </div>

//         <div className="d-flex align-items-start">
//           <MdLocationOn
//             className="me-3 flex-shrink-0 text-success"
//             size={26}
//           />

//           <a
//             href="https://share.google/jpKCooM1fvg24oe62"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-decoration-none text-white"
//           >
//             ચોથો માળ – 434, સ્કાઈવ્યુ બિલ્ડિંગ <br />
//             સ્વામિનારાયણ બસ સ્ટોપની બાજુમાં <br />
//             શ્યામધામ મંદિર (કામરેજ તરફ), સુરત
//           </a>
//         </div>

//       </div>

//       {/* Social */}
//       <div className="col-lg-3 col-md-12 col-12">

//         <h5 className="mb-3">Follow Us</h5>

//         <div className="d-flex gap-3">

//           <a
//             href="https://www.instagram.com/greenarmysurat/?hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://www.facebook.com/share/16XRD1cEwf/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <FiFacebook />
//           </a>

//           <a
//             href="https://youtube.com/@greenarmycharitabletrust?si=2Z1SJPr9MaG-A5Cb"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-icon"
//           >
//             <BsYoutube />
//           </a>

//         </div>

//       </div>

//     </div>
//   </div>
// </div>
<div className="bg-black text-white py-5 footer-section" id="contact">
  <div className="container">
    <div className="row gy-5">

      
      <div
        className="col-lg-4 col-md-6 col-12"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
         <h5 className="fw-bold mb-3">
          <ImLeaf className="me-2 text-success" />
          ગ્રીન આર્મી ચેરીટેબલ ટ્રસ્ટ, સુરત
        </h5>

        <p className="mb-0">
          ટકાઉ પહેલ અને સંવેદનશીલ કાર્યો દ્વારા આપણા સમુદાયમાં
          સકારાત્મક પરિવર્તન લાવવા માટે સમર્પિત.
        </p>
      </div>

    
      <div
        className="col-lg-5 col-md-6 col-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="d-flex align-items-start mb-3">
           <MdOutlineEmail
             className="me-3 flex-shrink-0 text-success"
             size={26}
           />

           <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=greenarmycharitabletrust@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
             className="text-decoration-none text-white text-break"
           >
             greenarmycharitabletrust@gmail.com
           </a>
         </div>

         <div className="d-flex align-items-start mb-3">
           <FiPhone
             className="me-3 flex-shrink-0 text-success"
             size={24}
           />

           <div>
             <a
               href="tel:+916353537092"
               className="text-decoration-none text-white"
             >
               +91 63535 37092
             </a>

             <br />

             <a
               href="tel:+918866937092"
               className="text-decoration-none text-white"
             >
               +91 88669 37092
             </a>
           </div>
         </div>

         <div className="d-flex align-items-start">
           <MdLocationOn
             className="me-3 flex-shrink-0 text-success"
             size={26}
           />

           <a
             href="https://share.google/jpKCooM1fvg24oe62"
             target="_blank"
             rel="noopener noreferrer"
             className="text-decoration-none text-white"
           >
             ચોથો માળ – 434, સ્કાઈવ્યુ બિલ્ડિંગ <br />
             સ્વામિનારાયણ બસ સ્ટોપની બાજુમાં <br />
             શ્યામધામ મંદિર (કામરેજ તરફ), સુરત
           </a>
        </div>
      </div>

      
      <div
        className="col-lg-3 col-md-12 col-12"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
       <h5 className="mb-3">Follow Us</h5>

         <div className="d-flex gap-3">

           <a
             href="https://www.instagram.com/greenarmysurat/?hl=en"
             target="_blank"
             rel="noopener noreferrer"
             className="social-icon"
           >
             <FaInstagram />
           </a>

           <a
             href="https://www.facebook.com/share/16XRD1cEwf/"
             target="_blank"
             rel="noopener noreferrer"
             className="social-icon"
           >
             <FiFacebook />
           </a>

           <a
             href="https://youtube.com/@greenarmycharitabletrust?si=2Z1SJPr9MaG-A5Cb"
             target="_blank"
             rel="noopener noreferrer"
             className="social-icon"
           >
             <BsYoutube />
           </a>

         </div>
      </div>

    </div>
  </div>
</div>
    )
}

export default Footer
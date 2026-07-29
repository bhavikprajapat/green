import {
  FiCalendar,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiMapPin,
  FiFeather,
} from "react-icons/fi";

const features = [
  {
    icon: <FiCalendar />,
    title: "દૈનિક વૃક્ષારોપણ",
    text: "અમે લગભગ દરરોજ નવા વિસ્તારોમાં વૃક્ષારોપણ કરીએ છીએ.",
  },
  {
    icon: <FiUsers />,
    title: "અનુભવી ટીમ",
    text: "વૃક્ષોની જાળવણી અને સંભાળ માટે અમારી સમર્પિત ટીમ કાર્યરત છે.",
  },
  {
    icon: <FiTrendingUp />,
    title: "સતત દેખરેખ",
    text: "માત્ર વૃક્ષ વાવતાં નથી, પરંતુ તેના વિકાસ સુધી ધ્યાન રાખીએ છીએ.",
  },
  {
    icon: <FiShield />,
    title: "પારદર્શક કામગીરી",
    text: "અમારી તમામ પ્રવૃત્તિઓ પારદર્શક અને વિશ્વસનીય છે.",
  },
  {
    icon: <FiMapPin />,
    title: "સ્થાનિક અભિયાન",
    text: "સુરત અને આસપાસના વિસ્તારોમાં સતત હરિયાળી અભિયાન.",
  },
  {
    icon: <FiFeather />,
    title: "ઇકો-ફ્રેન્ડલી સાથ",
    text: "પર્યાવરણને નુકસાન પહોંચાડ્યા વગર કાર્ય કરવાની પ્રતિબદ્ધતા.",
  },
];

export default function WhyGreenArmy() {
  return (
    <section className="why-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold ">
            શા માટે ગ્રીન આર્મી?
          </h2>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-4 text-center col-md-6" data-aos="zoom-in" key={index}>
              <div className="feature-card h-100">

                <div className="icon-box">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
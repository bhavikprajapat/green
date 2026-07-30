import { useTranslation } from "react-i18next";
import {
  FiCalendar,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiMapPin,
  FiFeather,
} from "react-icons/fi";

export default function WhyGreenArmy() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FiCalendar />,
      title: t("whycart1heading"),
      text: t("whycart1detail"),
    },
    {
      icon: <FiUsers />,
      title: t("whycart2heading"),
      text: t("whycart2detail"),
    },
    {
      icon: <FiTrendingUp />,
      title: t("whycart3heading"),
      text: t("whycart3detail"),
    },
    {
      icon: <FiShield />,
      title: t("whycart4heading"),
      text: t("whycart4detail"),
    },
    {
      icon: <FiMapPin />,
      title: t("whycart5heading"),
      text: t("whycart5detail"),
    },
    {
      icon: <FiFeather />,
      title: t("whycart6heading"),
      text: t("whycart6detail"),
    },
  ];

  return (
    <section className="why-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            {t("whygreenamry")}
          </h2>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 text-center"
              data-aos="zoom-in"
              key={index}
            >
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
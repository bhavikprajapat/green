import { useTranslation } from "react-i18next";

function LanguageSwitcher() {

  const { i18n } = useTranslation();

  return (
    <select
      className="form-select"
      style={{ width: "160px" }}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      defaultValue={i18n.language}
    >
      <option value="en">English</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  );
}

export default LanguageSwitcher;
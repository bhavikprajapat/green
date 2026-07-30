import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Login from './pages/auth/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Login from './pages/auth/Login';
import TeamManagment from './pages/teams/TeamManagment';
import Dailywork from './pages/teams/Dailywork';
import Landingpage from './pages/mainpage/Landingpage';
import About from './pages/mainpage/About';
import Volunteer from './pages/mainpage/Volunteer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Donation from './pages/mainpage/Donation';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,gu",
          layout:
            window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);
  }, []);



  return (
    <div >
      <Routes>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='/' element={<Landingpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Layout />} >
          <Route path='team' element={<TeamManagment />} />
          <Route path='dailywork' element={<Dailywork />} />
        </Route>
        <Route path='/Volunteer' element={<Volunteer />} />
        <Route path='/donation' element={<Donation />} />

      </Routes>

      {/* <div id="google_translate_element"> </div>
      <div>Welcome to Next JS</div>
      <div>Good Morning...!!!</div>
      <div>
        Transform Your Business with Intelligent Automation All-in-one platform
        for Accounting, GST Compliance, Inventory Management, and Mill
        Operations. Seamlessly sync data across Web and Android with real-time
        updates.
      </div> */}
    </div>
  );
}

export default App;

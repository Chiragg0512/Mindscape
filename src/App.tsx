import Header from "./components/Header";
import Landing from "./components/Landing";
import Testimonials from "./components/Testimonials";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SurveySection from "./components/SurveySection";
import CustomerSurvey from "./components/CustomerSurvey";
import { useState } from "react";

function App() {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartSurvey = () => {
    setShowSurvey(true);
  };

  const handleReturnHome = () => {
    setShowSurvey(false);
  };

  return (
    <div className="w-full min-h-screen font-rubik overflow-x-hidden overflow-y-auto">
      <Header />
      {!showSurvey ? (
        <>
          <Landing />
          <Testimonials />
          <SurveySection onStartSurvey={handleStartSurvey} />

          <Contact />
          <Footer />
          <Copyright />
        </>
      ) : (
        <CustomerSurvey onReturnHome={handleReturnHome} />
      )}
    </div>
  );
}

export default App;

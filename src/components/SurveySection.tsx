import React from "react";
import { Button } from "@/components/ui/button";

interface SurveySectionProps {
  onStartSurvey: () => void;
}

const SurveySection: React.FC<SurveySectionProps> = ({ onStartSurvey }) => {
  return (
    <section className="bg-gray-50 py-16 mt-16 mb-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">We Value Your Feedback</h2>
        <p className="text-xl mb-9">
          Help us improve our services by taking our customer survey.
        </p>
        <Button
          onClick={onStartSurvey}
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
        >
          Take Survey
        </Button>
      </div>
    </section>
  );
};

export default SurveySection;

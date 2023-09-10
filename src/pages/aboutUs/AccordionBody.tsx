import  { SetStateAction, useState } from "react";
import Accordion from "./Accordion";

const AccordionBody = () => {
  const imageUrl = "https://i.ibb.co/3FKGpDW/pexels-tima-miroshnichenko-5452293.jpg";

  const accordionData = [
    {
      title: "What services does LifeCare Hospital offer?",
      details: "LifeCare Hospital provides a wide range of medical services, including emergency care, specialized surgeries, diagnostic imaging, maternity care, pediatric care, and more. Our dedicated team of doctors, nurses, and staff are committed to delivering high-quality healthcare to meet your needs.",
    },
    {
      title: "How can I schedule an appointment with a doctor at LifeCare Hospital?",
      details: "Booking an appointment is easy. You can either call our appointment hotline at [appointment number], visit our website's appointment booking section, or use our mobile app to schedule a consultation with your preferred doctor. We strive to accommodate your schedule and ensure you receive timely medical attention.",
    },
    {
      title: "What insurance plans are accepted at LifeCare Hospital?",
      details: "LifeCare Hospital accepts a wide range of insurance plans to make healthcare accessible for our patients. We work with major insurance providers and offer direct billing services. Please visit our Insurance & Billing page on our website to see the list of accepted insurance plans or contact our billing department for assistance.",
    },
    {
      title: "How can I access my medical records and test results online?",
      details: "LifeCare Hospital offers an online patient portal that allows you to access your medical records, test results, and treatment history securely. You can create an account on our website or through our mobile app, and once logged in, you'll have convenient access to your health information from the comfort of your home.",
    },
  ];

  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);

  const toggleAccordion = (index: SetStateAction<number>) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(-1);
    } else {
    
      setOpenAccordionIndex(index);
    }
  };

  return (
    <div className="container py-10">
      <div className="grid items-center grid-cols-1 p-5 rounded-lg md:grid-cols-2">
        <img src={imageUrl} alt="Your Alt Text" className="h-3/6 rounded-lg " />
        <div>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              details={item.details}
              isOpen={index === openAccordionIndex}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionBody;

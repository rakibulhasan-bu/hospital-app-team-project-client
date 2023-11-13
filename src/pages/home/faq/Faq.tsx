import { FaCircle } from "react-icons/fa";
import faq from "../../../assets/faq2.png";
import Accordion from "./Accordion";
const Faq = () => {
  return (
    <div className="w-full py-10 text-white min-h-100vh bg-primary">
      {/* <SectionHeading
        semiSubTitle="Find Answers to Frequently asked Questions"
        title="Common Queries"
        subTitle="Let us help you find the answers you seek and provide you with the peace of mind you deserve."
      /> */}
      <div data-aos="fade-up" data-aos-duration="3000" className="max-w-2xl px-4 mx-auto text-center lg:px-0">
        <h3 className="font-medium text-accent">Find Answers to Frequently asked Questions</h3>
        <h1 className="flex items-center justify-center gap-1 my-3 text-2xl font-semibold text-white">
          <FaCircle className="text-xs text-accent" />
          <FaCircle className="text-xl" />
          <FaCircle className="text-xs text-accent" />
          <span className="mx-1 text-4xl ">Common Queries</span>
          <FaCircle className="text-xs text-accent" />
          <FaCircle className="text-xl" />
          <FaCircle className="text-xs text-accent" />
        </h1>
        <h4 className="text-sm text-center text-accent">Let us help you find the answers you seek and provide you with the peace of mind you deserve.</h4>
      </div>
      <div data-aos="zoom-in"  className="grid items-center grid-cols-1 p-5 rounded-lg md:grid-cols-2">
        <img src={faq} alt="" />
        <div>
          <Accordion title="What services does LifeCare Hospital offer?">
            <p className="p-5 rounded-lg bg-white/20">
              LifeCare Hospital provides a wide range of medical services,
              including emergency care, specialized surgeries, diagnostic
              imaging, maternity care, pediatric care, and more. Our dedicated
              team of doctors, nurses, and staff are committed to delivering
              high-quality healthcare to meet your needs.
            </p>
          </Accordion>
          <Accordion title="How can I schedule an appointment with a doctor at LifeCare Hospital?">
            <p className="p-5 rounded-lg bg-white/20">
              Booking an appointment is easy. You can either call our
              appointment hotline at [appointment number], visit our website's
              appointment booking section, or use our mobile app to schedule a
              consultation with your preferred doctor. We strive to accommodate
              your schedule and ensure you receive timely medical attention.
            </p>
          </Accordion>
          <Accordion title="What insurance plans are accepted at LifeCare Hospital?">
            <p className="p-5 rounded-lg bg-white/20">
              LifeCare Hospital accepts a wide range of insurance plans to make
              healthcare accessible for our patients. We work with major
              insurance providers and offer direct billing services. Please
              visit our Insurance & Billing page on our website to see the list
              of accepted insurance plans or contact our billing department for
              assistance.
            </p>
          </Accordion>
          <Accordion title="How can I access my medical records and test results online?">
            <p className="p-5 rounded-lg bg-white/20">
              LifeCare Hospital offers an online patient portal that allows you
              to access your medical records, test results, and treatment
              history securely. You can create an account on our website or
              through our mobile app, and once logged in, you'll have convenient
              access to your health information from the comfort of your home.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;

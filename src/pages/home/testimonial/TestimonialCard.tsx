import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const TestimonialCard = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[80%] p-10 m-3 lg:my-12 bg-accent/50 rounded-2xl text-textBlack/80">
      <h5 className="text-black ">July 03,2023</h5>
      <div className="flex flex-wrap-reverse justify-between">
        <div className="flex gap-1 text-amber-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <img
          src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/clients/client-01.jpg"
          alt="patient"
          className="absolute top-0 z-0 object-cover rounded-full right-2 md:right-16 md:rounded-2xl w-36 h-36"
        />
      </div>

      <p className="my-5">{t("home.testimonials.review")}</p>
      <h2 className="text-2xl font-bold text-black">
        {t("home.testimonials.name")}
      </h2>
      <h5>{t("home.testimonials.address")}</h5>
    </div>
  );
};

export default TestimonialCard;

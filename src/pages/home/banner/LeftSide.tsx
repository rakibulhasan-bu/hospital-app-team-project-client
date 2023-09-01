import { FaHeartbeat } from "react-icons/fa";
import "./Btn.css";
import { useTranslation } from 'react-i18next';

const LeftSide = () => {
  const { t } = useTranslation();
  return (
    <div className=" lg:space-y-6 pt-10 space-y-4 self-center">
      <div className=" flex items-center gap-4 text-white">
        <span>
          <FaHeartbeat size={30} />
        </span>
        <p>{t('home.banner.slogan')}</p>
      </div>
      <h1 className="text-2xl lg:text-5xl text-white lg:leading-tight">
        {t('home.banner.care')} <br /> {t('home.banner.for')} <br />
        <span className="text-3xl lg:text-6xl font-bold">{t('home.banner.heart')}</span>
      </h1>
      <p className="text-white font-medium text-lg lg:w-2/3 md:w-11/12">
        {t('home.banner.paragraph')}
      </p>
      <div>
        <button className=" btn plan-btn">Start Consultnn</button>
      </div>
    </div>
  );
};

export default LeftSide;

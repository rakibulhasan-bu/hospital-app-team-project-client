import { FaCircle } from "react-icons/fa";

interface SectionHeadingProps {
  title?: string;
  subTitle?: string;
  semiSubTitle?: string;
}

const SectionHeading = ({
  title,
  subTitle,
  semiSubTitle,
}: SectionHeadingProps) => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className="max-w-2xl px-4 mx-auto text-center lg:px-0">
      <h3 className="font-medium text-textGray">{semiSubTitle}</h3>
      <h1 className="flex items-center justify-center gap-1 my-3 text-2xl font-semibold text-secondary">
        <FaCircle className="text-xs text-accent" />
        <FaCircle className="text-xl" />
        <FaCircle className="text-xs text-accent" />
        <span className="mx-1 text-4xl">{title}</span>
        <FaCircle className="text-xs text-accent" />
        <FaCircle className="text-xl" />
        <FaCircle className="text-xs text-accent" />
      </h1>
      <h4 className="text-sm text-center text-textGray">{subTitle}</h4>
    </div>
  );
};

export default SectionHeading;

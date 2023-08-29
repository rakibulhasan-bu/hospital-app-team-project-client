interface SharedTitleProps {
    title?: string;
    subTitle?: string;
    largeTitle?: string;
    coloredTitle?: string;
}
const SharedTitle = ({ title, subTitle, largeTitle, coloredTitle }: SharedTitleProps) => {
    return (
        <div className='max-w-lg px-4 mx-auto lg:px-0'>
            <h3 className="font-medium text-center text-textGray">{title}</h3>
            <h1 className="text-[34px] leading-[34px] text-textBlack font-extrabold text-center pb-4">{largeTitle} <span className="text-secondary">{coloredTitle}</span></h1>
            <h4 className="text-sm text-center text-textGray">{subTitle}</h4>
        </div>
    );
};

export default SharedTitle;
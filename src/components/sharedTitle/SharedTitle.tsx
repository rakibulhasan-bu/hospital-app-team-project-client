interface SharedTitleProps {
    title?: string;
    subTitle?: string;
    largeTitle?: string;
    coloredTitle?: string;
}
const SharedTitle = ({ title, subTitle, largeTitle, coloredTitle }: SharedTitleProps) => {
    return (
        <div className='max-w-lg mx-auto px-4 lg:px-0'>
            <h3 className="text-textGray font-medium text-center">{title}</h3>
            <h1 className="text-[34px] leading-[34px] text-textBlack font-extrabold text-center pb-4">{largeTitle} <span className="text-secondary">{coloredTitle}</span></h1>
            <h4 className="text-textGray text-sm text-center">{subTitle}</h4>
        </div>
    );
};

export default SharedTitle;
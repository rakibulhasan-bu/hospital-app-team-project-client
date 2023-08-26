import SharedTitle from "../../../components/sharedTitle/SharedTitle";
import SingleNews from "./singleNews/SingleNews";

const NewsMediaHome = () => {
    return (
        <div className='container mx-auto px-2 lg:px-0 py-6 lg:py-12'>
            <SharedTitle key={"newsTitle"} title="Health Advice From Top Doctors" largeTitle="Latest" coloredTitle="Articles" subTitle="Health Articles That Keep You Informed About Good Health Practices And Achieve Your Goals" />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-2 lg:px-12 pt-4 lg:pt-8'>
                <SingleNews />
                <SingleNews />
                <SingleNews />
            </div>
        </div>
    );
};

export default NewsMediaHome;
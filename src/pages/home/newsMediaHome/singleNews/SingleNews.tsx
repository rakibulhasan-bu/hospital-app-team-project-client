import { IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegMessage } from 'react-icons/fa6';
import { LuCalendarClock } from 'react-icons/lu';
const SingleNews = () => {
    return (
        <div className='myBorder hover:shadow-xl'>
            <div className='h-64  cursor-pointer'>
                <img className='rounded-t w-full h-full object-cover' src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693057174/Website-assets/LifeCare/pexels-polina-tankilevitch-3873191_sobg4q.jpg" alt="" />
            </div>
            {/* this is heading and date div  */}
            <div className='pt-2 pb-4 px-4'>
                <h2 className='text-secondary font-medium cursor-pointer'>Diagnostic radiology</h2>
                <h3 className='text-textBlack font-medium'>Study reveals fiber we should eat to prevent disease</h3>
                <div className='flex items-center pt-1 gap-1 text-sm text-textGray'>
                    <LuCalendarClock />
                    <span>September 19, 2023</span>
                </div>
            </div>
            {/* this is like comment view div  */}
            <div className='flex items-center justify-between text-sm border-t border-t-grey text-textGray py-3 px-4'>
                {/* this is likes div  */}
                <div className='flex items-center gap-1'>
                    <IoMdHeartEmpty className="cursor-pointer text-lg" />
                    {/* <IoMdHeart/> */}
                    <span>66</span>
                    <span>Likes</span>
                </div>
                {/* this is views div  */}
                <div className='flex items-center gap-1'>
                    <MdOutlineRemoveRedEye className="text-lg" />
                    <span>254</span>
                    <span>Views</span>
                </div>
                {/* this is comments div  */}
                <div className='flex items-center gap-1'>
                    <FaRegMessage />
                    <span>12</span>
                    <span>Comments</span>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
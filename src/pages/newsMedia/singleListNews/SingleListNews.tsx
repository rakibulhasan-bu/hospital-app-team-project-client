import { BiTimeFive } from "react-icons/bi";
import { FaRegComments, FaTags } from "react-icons/fa";
const SingleListNews = () => {
    return (
        <div className='myBorder p-4'>
            {/* this is image div  */}
            <div className='h-80 rounded overflow-hidden'>
                <img className="h-full w-full object-cover hover:scale-110 transition-all duration-700 cursor-pointer" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693306253/Website-assets/LifeCare/blog-01_uvphz8.jpg" alt="" />
            </div>
            {/* this is another info div  */}
            <div className='pt-6 space-y-2'>
                <h2 className="title font-medium hover:text-secondary cursor-pointer w-fit">What are the benefits of Online Doctor Booking?</h2>
                {/* dr date category div  */}
                <div className='flex items-center gap-6 text-textGray'>
                    {/* this is doctor div  */}
                    <div className='flex items-center gap-1'>
                        <img className="w-8 h-8 rounded-full object-cover" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693306253/Website-assets/LifeCare/blog-01_uvphz8.jpg" alt="" />
                        <h3>Dr. Daren Elder</h3>
                    </div>
                    {/* this is date div  */}
                    <div className='flex items-center gap-1'>
                        <BiTimeFive className="text-secondary" />
                        <h3>3 Jul 2023</h3>
                    </div>
                    {/* this is Comments div  */}
                    <div className='flex items-center gap-1'>
                        <FaRegComments className="text-secondary" />
                        <h3>3 Comments</h3>
                    </div>
                    {/* this is Category div  */}
                    <div className='flex items-center gap-1'>
                        <FaTags className="text-secondary" />
                        <h3>Cardiology</h3>
                    </div>
                </div>
                <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, doloremque repellat beatae eius omnis, recusandae voluptates quod ex quae minima rerum eum, architecto animi expedita voluptate quia labore ducimus incidunt?</p>
                <h3 className="text-secondary underline font-medium cursor-pointer">Read more</h3>
            </div>
        </div>
    );
};

export default SingleListNews;
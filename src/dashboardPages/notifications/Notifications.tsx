const Notifications = () => {
    const a = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='absolute myBorder rounded top-12 -left-44 w-96 max-h-80 overflow-y-auto bg-white'>
            <div className="border-b text-center p-1.5 border-grey">Notifications</div>
            <div className='p-2 pb-4 space-y-2'>
                {a.map(any => (
                    <div key={any} className='flex gap-2 hover:bg-primary/5 rounded cursor-default'>
                        <img className="w-10 h-10 object-cover rounded-full" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1693306253/Website-assets/LifeCare/blog-01_uvphz8.jpg" alt="" />
                        <div className=''>
                            <h3 className="text-textBlack text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, reiciendis?</h3>
                            <p className="text-xs text-textGray">23 september 2023 at 9.34 PM</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
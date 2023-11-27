import { BiSearchAlt2 } from "react-icons/bi";
import SingleListNews from "./singleListNews/SingleListNews";
import { useGetAllBlogQuery } from "../../redux/features/blog/blogApi";

type Blog = {
  _id: string;
  description: string;
  district: string;
  email: string;
  imageUrl: string;
  tags: string;
  title: string;
  createdAt: string;
};

const NewsMedia = () => {
  const { data } = useGetAllBlogQuery("");
  console.log(data);
  const a = [1, 2, 3, 4, 5];
  return (
    <div className="container mx-auto px-2 lg:px-0 py-8 flex gap-4">
      {/* list view news side  */}
      <div className="w-8/12 flex flex-col gap-4">
        {data?.blogs?.map((blog: Blog) => (
          <SingleListNews key={blog._id} blog={blog} />
        ))}
      </div>
      {/* search and latest post heading side  */}
      <div className="w-4/12">
        {/* search div here  */}
        <div className="p-4 myBorder">
          <div className="flex items-center myInput px-0 py-0">
            <input
              className="w-full outline-none px-2 h-full"
              placeholder="search..."
              type="text"
              id=""
            />
            <div className="bg-secondary cursor-pointer p-2 h-full text-white border border-secondary text-xl">
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
        {/* latest posts div here  */}
        <div className="myBorder mt-6">
          <h3 className="subTitle p-4">Latest posts</h3>
          <div className="border-t border-grey p-4 space-y-4">
            {data?.blogs?.map((blog: Blog) => (
              <div
                key={blog._id}
                className="w-full h-16 flex items-center gap-4"
              >
                <div className="w-1/3 h-full overflow-hidden rounded-md">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700 cursor-pointer rounded-md"
                    src={blog?.imageUrl}
                    alt={blog.title}
                  />
                </div>
                <div className="">
                  <h3 className="subTitle hover:text-secondary cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-textGray text-sm">3 Jul 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Blog categories div here  */}
        <div className="myBorder mt-6">
          <h3 className="subTitle p-4">Blog categories</h3>
          <div className="border-t border-grey p-4 space-y-4">
            {data?.blogs?.map((blog: Blog) => (
              <div
                key={blog._id}
                className="w-full flex items-center justify-between gap-4"
              >
                <h3 className="text-textDarkBlack">Cardiology</h3>
                <h3 className="text-textGray">{data?.blogs?.length}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* tags div here  */}
        <div className="myBorder mt-6">
          <h3 className="subTitle p-4">Tags</h3>
          <div className="border-t border-grey p-4 flex flex-wrap gap-2">
            {a.map((one) => (
              <div
                key={one}
                className="p-2 myBorder text-sm hover:bg-secondary hover:text-white cursor-pointer"
              >
                <h3 className="text-textDarkBlack">Cardiology</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;

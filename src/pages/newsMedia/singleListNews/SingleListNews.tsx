import { BiTimeFive } from "react-icons/bi";
import { FaRegComments, FaTags } from "react-icons/fa";

type Blog = {
  _id: string;
  author: string;
  description: string;
  district: string;
  email: string;
  imageUrl: string;
  tags: string[];
  title: string;
  createdAt: string;
};

const SingleListNews: React.FC<{ blog: Blog }> = ({ blog }) => {
  const {
    description,

    imageUrl,

    title,
    createdAt,
    author,
  } = blog;
  return (
    <div className="myBorder p-4">
      {/* this is image div  */}
      <div className="h-80 rounded overflow-hidden">
        <img
          className="h-full w-full object-cover hover:scale-110 transition-all duration-700 cursor-pointer object-top"
          src={imageUrl}
          alt=""
        />
      </div>
      {/* this is another info div  */}
      <div className="pt-6 space-y-2">
        <h2 className="title font-medium hover:text-secondary cursor-pointer w-fit">
          {title}
        </h2>
        {/* dr date category div  */}
        <div className="flex items-center gap-6 text-textGray">
          {/* this is doctor div  */}
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={imageUrl}
              alt=""
            />
            <h3>{author}</h3>
          </div>
          {/* this is date div  */}
          <div className="flex items-center gap-1">
            <BiTimeFive className="text-secondary" />
            <h3>{createdAt}</h3>
          </div>
          {/* this is Comments div  */}
          <div className="flex items-center gap-1">
            <FaRegComments className="text-secondary" />
            <h3>3 Comments</h3>
          </div>
          {/* this is Category div  */}
          <div className="flex items-center gap-1">
            <FaTags className="text-secondary" />
            <h3>Cardiology</h3>
          </div>
        </div>
        <p className="text">{description}</p>
        <h3 className="text-secondary underline font-medium cursor-pointer">
          Read more
        </h3>
      </div>
    </div>
  );
};

export default SingleListNews;

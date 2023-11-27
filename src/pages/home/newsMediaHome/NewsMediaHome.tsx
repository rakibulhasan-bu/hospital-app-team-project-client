import SharedTitle from "../../../components/sharedTitle/SharedTitle";
import { useGetAllBlogQuery } from "../../../redux/features/blog/blogApi";
import SingleNews from "./singleNews/SingleNews";

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
const NewsMediaHome = () => {
  const { data } = useGetAllBlogQuery("");
  return (
    <div className="container mx-auto px-2 lg:px-0 py-6 lg:py-12">
      <div data-aos="fade-up" data-aos-duration="3000">
        <SharedTitle
          key={"newsTitle"}
          title="Health Advice From Top Doctors"
          largeTitle="Latest"
          coloredTitle="Articles"
          subTitle="Health Articles That Keep You Informed About Good Health Practices And Achieve Your Goals"
        />{" "}
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-2 lg:px-12 pt-4 lg:pt-8"
      >
        {data?.blogs.slice(0, 3).map((blog: Blog) => (
          <SingleNews key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default NewsMediaHome;

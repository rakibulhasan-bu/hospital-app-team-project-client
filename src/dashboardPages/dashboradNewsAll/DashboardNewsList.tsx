import { useGetAllBlogQuery } from "../../redux/features/blog/blogApi";
import NewsRow from "./NewsRow";

const DashboardNewsList = () => {
    const { data } = useGetAllBlogQuery("");
    console.log(data);
    return (
        <section className="container mx-auto">
            <p className=" py-6 text-primary font-medium">Branch | Branch list </p>
            <div className=" bg-white p-5 rounded-2xl">
                <h2 className=" mb-5 text-xl font-semibold text-primary">
                    Branch List {data?.blogs?.length}
                </h2>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">
                                                #
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Mobile
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Division
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.blogs?.map((singleData: any) => (
                                            <NewsRow singleData={singleData}></NewsRow>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardNewsList;
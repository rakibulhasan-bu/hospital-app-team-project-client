import { useGetDoctorsQuery } from "../../../redux/api/baseApi";
import Row from "./Row";
const DoctorsList = () => {
  const { data } = useGetDoctorsQuery("");
  console.log("all doctors", data);
  return (
    <section className="container mx-auto">
      <p className=" py-6 text-primary font-medium">Doctors | Doctor list </p>
      <div className=" bg-white p-5 rounded-2xl">
        <h2 className=" mb-5 text-xl font-semibold text-primary">
          Doctor List {data?.doctors?.length}
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
                        Deperment
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Specialization
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Degree
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Mobile
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Joining Date
                      </th>
                      <th scope="col" className="px-6 py-4">
                        action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.doctors?.map((singleData: any) => (
                      <Row key={singleData._id} singleData={singleData}></Row>
                    ))}

                    {/* <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Mark
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Otto
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        @mdo
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        @mdo
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        @mdo
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        @mdo
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        @mdo
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-secondary cursor-pointer">
                        <div className=" relative">
                          <div
                            onClick={() => setOpen((prev) => !prev)}
                            className=" w-8 h-8 bg-slate-200 items-center flex justify-center text-lg rounded-lg"
                          >
                            <HiOutlineDotsVertical />
                          </div>
                          <div className={`${open ? "block" : "hidden"}`}>
                            <div className=" border rounded-md p-4 flex flex-col items-start absolute -bottom-[70px] -left-[50px]  z-50">
                              <button className=" flex items-center gap-3">
                                <FaEdit /> Edit
                              </button>
                              <button className=" flex items-center gap-3">
                                <RiDeleteBin6Line /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr> */}
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

export default DoctorsList;

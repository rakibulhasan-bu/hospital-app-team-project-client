import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductList = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="container mx-auto">
      <p className="py-6 text-primary font-medium">Products | Product List</p>
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="mb-5 text-xl font-semibold text-primary">Product List</h2>
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
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Stock
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Product 1
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Category A
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        $50.00
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        100
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-secondary cursor-pointer">
                        <div className="relative">
                          <div
                            onClick={() => setOpen((prev) => !prev)}
                            className="w-8 h-8 bg-slate-200 items-center flex justify-center text-lg rounded-lg"
                          >
                            <HiOutlineDotsVertical />
                          </div>
                          <div className={`${open ? "block" : "hidden"}`}>
                            <div className="border rounded-md p-4 flex flex-col items-start absolute -bottom-[70px] -left-[50px] z-50">
                              <button className="flex items-center gap-3">
                                <FaEdit /> Edit
                              </button>
                              <button className="flex items-center gap-3">
                                <RiDeleteBin6Line /> Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {/* Add more product rows here */}
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

export default ProductList;

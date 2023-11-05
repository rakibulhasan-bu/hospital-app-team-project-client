import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface SingleData {
  name: string;
  email: string;
  mobile: string;
  specialist: string;
  department: string;
  qualification: string;
}

interface RowProps {
  singleData: SingleData;
}

const Row: React.FC<RowProps> = ({ singleData }) => {
  const { name, email, mobile, specialist, department, qualification } =
    singleData;
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">#</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{department}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{specialist}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        {qualification}
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{mobile}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{email}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">@mdo</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-secondary cursor-pointer">
        <div className=" relative">
          <div
            onClick={toggleOpen}
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
  );
};

export default Row;

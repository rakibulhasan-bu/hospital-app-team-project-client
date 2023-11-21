import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteDoctorMutation } from "../../../redux/features/doctor/doctorApi";
import { Link, useNavigate } from "react-router-dom";

interface SingleData {
  name: string;
  _id: string;
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
  const [deleteDoctor] = useDeleteDoctorMutation();
  const navigate = useNavigate();

  const { name, email, mobile, specialist, department, qualification, _id } =
    singleData;
  const [open, setOpen] = useState<boolean>(false);
  const handleEdit = (doctor: SingleData) => {
    navigate(`/dashboard/edit-doctor/${doctor._id}`);
  };

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
      <td className="whitespace-nowrap px-6 py-4 font-medium cursor-pointer">
        <div className=" relative">
          <div
            onClick={toggleOpen}
            className="w-8 h-8 bg-slate-200 items-center flex justify-center text-lg rounded-lg group"
          >
            <span className="group-hover:text-secondary">
              <HiOutlineDotsVertical />
            </span>
          </div>
          <div className={`${open ? "block z-10" : "hidden"}`}>
            <div className="border rounded-md py-4 flex flex-col items-start absolute -bottom-[90px] -left-[80px] z-50 bg-slate-100">
              <button
                onClick={() => handleEdit(singleData)}
                className="flex items-center gap-3 px-4 hover:bg-slate-200 py-1 w-full"
              >
                <FaEdit /> Edit
              </button>

              <button
                onClick={() => deleteDoctor(_id)}
                className="flex items-center gap-3 px-4 hover:bg-slate-200 py-1"
              >
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

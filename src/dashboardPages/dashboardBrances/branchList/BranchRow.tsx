import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteBranchMutation } from "../../../redux/features/branch/branchApi";
import { ImSpinner9 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

interface SingleData {
  name: string;
  _id: string;
  email: string;
  mobile: string;
  division: string;
  phone: string;
}

interface RowProps {
  singleData: SingleData;
}

const BranchRow: React.FC<RowProps> = ({ singleData }) => {
  const navigate = useNavigate();
  const [deleteBranch, { isLoading }] = useDeleteBranchMutation();
  const { name, email, phone, division, _id } = singleData;

  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  // const handleClick = (singleData: SingleData) => {
  //   navigate(`/dashboard/edit-branch/${singleData._id}`);
  // };

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">#</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{phone}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{email}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{division}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium hover:text-secondary cursor-pointer">
        <div className=" relative">
          <div
            onClick={toggleOpen}
            className="w-8 h-8 bg-slate-200 items-center flex justify-center text-lg rounded-lg"
          >
            <HiOutlineDotsVertical />
          </div>
          <div className={`${open ? "block" : "hidden"}`}>
            <div className="border rounded-md py-4 flex flex-col items-start absolute -bottom-[90px] -left-[80px] z-50 bg-slate-100">
              <Link to={`/dashboard/edit-branch/${_id}`}>
                <button className="flex items-center gap-3 px-4 hover:bg-slate-200 py-1 w-full">
                  <FaEdit /> Edit
                </button>
              </Link>

              <button
                onClick={() => deleteBranch(_id)}
                className="flex items-center gap-3 px-4 hover:bg-slate-200 py-1"
              >
                {isLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={20} />
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiDeleteBin6Line />
                    delele
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BranchRow;

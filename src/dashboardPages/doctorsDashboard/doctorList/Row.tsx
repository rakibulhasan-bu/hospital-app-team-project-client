import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteDoctorMutation } from "../../../redux/features/doctor/doctorApi";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface SingleData {
  name: string;
  _id: string;
  email: string;
  phone: string;
  specialist: string;
  department: string;
  qualifications: string;
  createdAt: string;
  imageUrl: string;
}

interface RowProps {
  singleData: SingleData;
}

const Row: React.FC<RowProps> = ({ singleData }) => {
  const [deleteDoctor] = useDeleteDoctorMutation();
  const navigate = useNavigate();

  const {
    name,
    email,
    phone,
    department,
    qualifications,
    _id,
    createdAt,
    imageUrl,
  } = singleData;

  const handleEdit = (doctor: SingleData) => {
    navigate(`/dashboard/edit-doctor/${doctor._id}`);
  };

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">#</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium flex items-center  gap-2">
        <img
          className=" w-7 h-7 object-cover rounded-full"
          src={imageUrl}
          alt={name}
        />
        {name}
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{department}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">
        {qualifications}
      </td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{phone}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{email}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{createdAt}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium cursor-pointer">
        {/* <div className=" relative">
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
        </div> */}
        <Dropdown>
          <DropdownTrigger>
            <Button size="sm" variant="bordered">
              <HiOutlineDotsVertical size={20} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit" onClick={() => handleEdit(singleData)}>
              <div className=" flex items-center gap-3">
                <FaEdit /> Edit
              </div>
            </DropdownItem>
            <DropdownItem
              onClick={() => deleteDoctor(_id)}
              key="delete"
              className="text-danger"
              color="danger"
            >
              <div className=" flex items-center gap-3">
                <span>
                  <RiDeleteBin6Line />
                </span>
                <span> Delele</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default Row;

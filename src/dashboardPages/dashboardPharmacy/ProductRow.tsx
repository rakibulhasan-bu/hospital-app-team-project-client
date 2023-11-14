import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface SingleProduct {
    name: string;
    description: string;
    oldPrice: number;
    newPrice: number;
    cashback: number;
    imageUrl: string;
}

interface RowProps {
    singleProduct: SingleProduct;
}

const ProductRow: React.FC<RowProps> = ({ singleProduct }) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                1
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {singleProduct?.name}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {singleProduct?.description}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {singleProduct?.oldPrice}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {singleProduct?.newPrice}
            </td>
            <td className="whitespace-nowrap px-6 py-4 font-medium">
                {singleProduct?.cashback}
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
    );
};

export default ProductRow;
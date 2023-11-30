import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ImSpinner9 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import { Link } from "react-router-dom";

interface SingleProduct {
  name: string;
  _id: any;
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
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
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
            <div className="border rounded-md py-4 flex flex-col items-start absolute -bottom-[90px] -left-[80px] z-50 bg-slate-100">
              <Link to={`/dashboard/edit-product/${singleProduct?._id}`}>
                <button className="flex items-center gap-3 px-4 hover:bg-slate-200 py-1 w-full">
                  <FaEdit /> Edit
                </button>
              </Link>

              <button
                onClick={() => deleteProduct(singleProduct?._id)}
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

export default ProductRow;

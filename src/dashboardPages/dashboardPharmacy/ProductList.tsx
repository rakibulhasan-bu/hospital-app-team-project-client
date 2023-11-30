import ProductRow from "./ProductRow";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";

interface SingleProductType {
  _id: undefined;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  cashback: number;
  imageUrl: string;
}

const ProductList = () => {
  const { data } = useGetAllProductQuery("product");

  return (
    <section className="container mx-auto">
      <p className="py-6 text-primary font-medium">Products | Product List</p>
      <div className="bg-white p-5 rounded-2xl">
        <h2 className="mb-5 text-xl font-semibold text-primary">
          Product List
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
                    {data?.products.map((product: SingleProductType) => (
                      <ProductRow key={product._id} singleProduct={product} />
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

export default ProductList;

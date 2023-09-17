import { useState } from 'react';

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1); // Quantity selected by the user
  const productDetails = {
    name: "Apollo Pharmacy ORS Orange Flavour Drink 200 ml, 4 Count",
    manufacturer: "APOLLO HEALTHCO LIMITED",
    description: "Introducing the Apollo Pharmacy Orange Flavour ORS Drink, a refreshing and revitalizing oral rehydration solution...",
    price: 104.40,
    MRP: 116,
    inStock: true,
  };

  // Function to handle adding the product to the cart
  const addToCart = () => {
    // Implement your logic to add the product to the cart here
    console.log(`Added ${quantity} ${productDetails.name} to the cart.`);
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img src="/src/assets/product-image.jpg" alt={productDetails.name} className="w-full" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{productDetails.name}</h1>
          <p className="text-gray-600">{productDetails.manufacturer}</p>
          <p className="mt-4">{productDetails.description}</p>
          <div className="mt-4">
            <p className="text-lg font-bold text-orange-500">Price: ₹{productDetails.price}</p>
            <p className="text-gray-500">MRP: ₹{productDetails.MRP}</p>
            {productDetails.inStock ? (
              <p className="text-green-500">In Stock</p>
            ) : (
              <p className="text-red-500">Out of Stock</p>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="quantity" className="text-lg font-semibold">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="border rounded-md p-2 ml-2"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <button
            onClick={addToCart}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

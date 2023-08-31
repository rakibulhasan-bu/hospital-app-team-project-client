

const Pharmacy = () => {
  return (
    <div>
       <div className="relative w-full h-56">
      <img
        src="https://i.ibb.co/1v8L3QT/glass-water-pills-desk.jpg" // Replace with the actual path to your background image
        alt="E-commerce Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Welcome to Our Online Pharmacy!
        </h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for medicine..."
            className="px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pharmacy;
import { FaCircle } from "react-icons/fa";

const Partners = () => {
    return (
        <div className="container px-2 mx-auto my-10 text-xl lg:min-h-screen lg:px-0">
            <div>
            <h1 className="flex items-center justify-center gap-1 mb-5 text-2xl font-semibold text-secondary/90">
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
              <span className="mx-1 text-3xl">Browse by Specialities</span>
              <FaCircle className="text-xs text-accent" />
              <FaCircle className="text-xl" />
              <FaCircle className="text-xs text-accent" />
            </h1>
            </div>
        </div>
    );
};

export default Partners;
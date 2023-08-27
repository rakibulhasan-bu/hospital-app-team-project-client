import { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex items-center space-x-2">
      <div onClick={toggleDarkMode}>
        {darkMode ? (
          <CiDark color="black" size={25} />
        ) : (
          <CiLight color="orange" size={25} />
        )}
      </div>
    </div>
  );
};

export default DarkToggle;

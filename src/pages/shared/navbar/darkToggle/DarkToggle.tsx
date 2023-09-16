import { Switch } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../redux/features/theme/themeSlice";
import { RootState } from "../../../../redux/store";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const DarkToggle = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.themeState)

  const toggleDarkMode = () => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"))
  };
  return (
    <Switch
      defaultSelected
      onClick={toggleDarkMode}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
};

export default DarkToggle;

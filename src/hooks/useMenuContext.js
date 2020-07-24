import { useContext } from "react";
import { MenuContext } from "context/MenuProvider";

export const useMenuContext = () => useContext(MenuContext);
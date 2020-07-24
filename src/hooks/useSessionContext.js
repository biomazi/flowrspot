import { useContext } from "react";
import { StateContext } from "context/StateProvider";

export const useSessionContext = () => useContext(StateContext);
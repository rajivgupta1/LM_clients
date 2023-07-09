import { toast } from "react-toastify";
import { fetchBurrow, postBurrow } from "../../helper/axios";
import { fetchBookAction } from "../books/bookAction";
import { setBurrows } from "./burrowSlice";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //fetch user burrow
    dispatch(fetchBookAction());
  }
};
export const fetchBurrowAction = () => async (dispatch) => {
  const { status, burrowHistory } = await fetchBurrow();

  if (status === "success") {
    //fetch user burrow
    console.log("step 5");
    dispatch(setBurrows(burrowHistory));
  }
};
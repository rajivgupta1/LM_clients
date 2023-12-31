import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const burrowAPI = rootAPI + "/api/v1/burrow";

const getUserIdFromLocalStorage = () => {
  console.log("step 4");
  const str = localStorage.getItem("persist:userInfo");

  if (str) {
    const userInfo = JSON.parse(str);

    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);

      return user?._id;
    }
  }

  return null;
};
// ====== user
export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI, userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI + "/login", userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ========= book
export const postBook = async (obj) => {
  try {
    const { data } = await axios.post(bookAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchBooks = async () => {
  try {
    const { data } = await axios.get(bookAPI);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateBook = async (obj) => {
  try {
    const { data } = await axios.put(bookAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (_id) => {
  try {
    const { data } = await axios.delete(bookAPI + "/" + _id, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ========= Burrow
export const postBurrow = async (obj) => {
  try {
    const { data } = await axios.post(burrowAPI, obj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchBurrow = async () => {
  try {
    console.log("step 3");
    const { data } = await axios.get(burrowAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
import axios from "axios";

const signin = async (userData) => {
  try {
    const { data } = await axios.post("/api/auth/login", userData);
    return data;
  } catch (error) {
    throw {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
};

const signup = async (userData) => {
  try {
    const { data } = await axios.post("/api/auth/register", userData);
    return data;
  } catch (error) {
    throw {
      message: error.response.data.message,
      status: error.response.status,
    };
  }
};

export { signin, signup };

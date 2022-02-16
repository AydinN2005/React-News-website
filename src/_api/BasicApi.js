import Axios from 'axios'

export const BasicApi = () => {
  return Axios.create({
    baseURL: "http://localhost:3001",
  });
};
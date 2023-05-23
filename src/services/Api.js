import axios from "axios";

const api = axios.create({
  baseURL: 'http://172.29.240.1:3000/',
});

export const getTrainingA = async () => {
  return api.get(
    `/trainingA`
  ).catch(err => {
    console.log(err);
  })
}

export default api;

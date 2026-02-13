import api from "./index";

export const getTestServices = async (params) => {
  const response = await api.get("/test-service/get", { params });
  return response.data;
};

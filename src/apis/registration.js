import api from "./index";

export const createRegistration = async (formData) => {
  const response = await api.post("/registrations/create", formData);
  return response.data;
};

export const getParents = async () => {
  const response = await api.get("/parent/get");
  return response.data;
};

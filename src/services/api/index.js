import axios from "axios";
const API = process.env.NEXT_PUBLIC_API_URL;

export const GetAllDataBank = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    throw error;
  }
};

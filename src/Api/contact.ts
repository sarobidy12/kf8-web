import axios from "axios";

export const contactUs = async (data: any) => {
  return await axios.post("https://api.kaf8.com/contact", data);
};

import axios from "axios";

export const postUrl = async (payload: unknown, url: string) => {
  console.log(payload);
  const res = await axios({
    method: "POST",
    url: import.meta.env.VITE_BASEURL + url,
    data: payload,
  });
  return res.data;
};

export const getUrl = async (url: string) => {
  const res = await axios.get(import.meta.env.VITE_BASEURL + url);
  return res.data;
};

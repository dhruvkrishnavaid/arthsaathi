import axios from "axios";

export const postUrl = async (user: unknown, url: string) => {
  const res = await axios.post(import.meta.env.VITE_BASEURL + url, {
    body: user,
  });
  return res.data;
};

export const getUrl = async (url: string) => {
  const res = await axios.get(import.meta.env.VITE_BASEURL + url);
  return res.data;
};

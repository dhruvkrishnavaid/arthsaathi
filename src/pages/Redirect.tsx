import { useEffect } from "react";
import { useNavigate } from "react-router";

const Redirect = (params: {url: string}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(params.url);
  });
  return null;
}

export default Redirect;
import { useLocation, useNavigate } from "react-router-dom";

const usePathQuery = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setPathQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    navigate({ search: searchParams.toString() });
  };

  const getPathQuery = (key: string, defaultValue: string): string => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key) || defaultValue;
  };

  return { setPathQuery, getPathQuery };
};

export { usePathQuery };

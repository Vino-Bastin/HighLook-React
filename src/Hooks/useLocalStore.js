import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useLocalStore = (getData) => {
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch, setData, auth.JWT, filters, pageNumber);
  }, [auth.JWT, filters, pageNumber, dispatch, getData]);

  return [
    { data, filters, pageNumber },
    { setData, setFilters, setPageNumber },
  ];
};

export default useLocalStore;

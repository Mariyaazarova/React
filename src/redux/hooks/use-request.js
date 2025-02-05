import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatusById } from "../entities/request/request-slice";

export const useRequest = (thunk, ...params) => {
  const [request, setRequest] = useState();
  const dispatch = useDispatch();

  const requestStatus = useSelector((state) =>
    selectRequestStatusById(state, request?.requestId)
  );

  useEffect(() => {
    const currentRequest = dispatch(thunk(...params));

    setRequest(currentRequest);

    return () => {
      currentRequest.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, ...params]);

  return requestStatus;
};

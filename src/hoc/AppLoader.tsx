import React, { useEffect } from "react";
// Libs
import { useDispatch, useSelector } from "react-redux";
// Components
import { getStuffLoadingStatus } from "../store/stuffSlice/selectors";
import { loadStuff } from "../store/stuffSlice/actions";

interface AppLoaderProp {
  children: any;
}

const AppLoader: React.FC<AppLoaderProp> = ({ children }: any) => {
  const dispatch = useDispatch();
  const stuffStatus = useSelector(getStuffLoadingStatus);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(loadStuff());
  }, []);

  if (stuffStatus) return <>Loading...</>;

  return children;
};

export default AppLoader;

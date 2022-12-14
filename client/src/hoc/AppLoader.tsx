import React, { useEffect } from "react";
// Components
import Loader from "../components/common/Loader";
// Utils
import { getStuffLoadingStatus } from "../store/stuffSlice/selectors";
import { loadStuff } from "../store/stuffSlice/actions";
import { loadUsers } from "../store/usersSlice/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCurrentUserId } from "../store/authSlice/selectors";
import { loadCategories } from "../store/categoriesSlice/actions";

interface AppLoaderProp {
  children: any;
}

const AppLoader: React.FC<AppLoaderProp> = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const stuffStatus = useAppSelector(getStuffLoadingStatus);
  const currentUserId = useAppSelector(getCurrentUserId);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(loadStuff());
    // @ts-ignore: Unreachable code error
    dispatch(loadUsers());
    // @ts-ignore: Unreachable code error
    dispatch(loadCategories());
  }, [currentUserId]);

  if (stuffStatus) return <Loader />;

  return children;
};

export default AppLoader;

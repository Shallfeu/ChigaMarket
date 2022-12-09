import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Components
import Loader from "../../components/common/Loader";
import { useAppDispatch } from "../../store/hooks";
import { logOut } from "../../store/authSlice/actions";

const LogOut: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate("/");
      });
  }, []);

  return <Loader />;
};

export default LogOut;

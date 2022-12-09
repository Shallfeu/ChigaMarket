import axios from "axios";

import localStorageService from "./localStorageService";
import config from "../config.json";

const httpAuth = axios.create({
  baseURL: `${config.apiEndPoint}/auth/`,
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});

const regUrl = "signUp";
const logUrl = "signIn";

const authService = {
  register: async (payload: { email: string; password: string }) => {
    const { data } = await httpAuth.post(regUrl, payload);
    return data;
  },

  login: async (payload: { email: string; password: string }) => {
    const { data } = await httpAuth.post(logUrl, payload);
    return data;
  },

  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;

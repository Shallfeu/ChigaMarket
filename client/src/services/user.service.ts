import httpService from "./http.service";

const userEndPoint = "user/";

const userService = {
  fetchAll: async () => {
    const { data } = await httpService.get(userEndPoint);
    return data;
  },

  update: async (payload: { _id: string; email: string }) => {
    const { data } = await httpService.patch(
      userEndPoint + payload._id,
      payload
    );
    return data;
  },

  updatePassword: async (payload: { _id: string; email: string }) => {
    const { data } = await httpService.patch(
      userEndPoint + payload._id,
      payload
    );
    return data;
  },

  getUserById: async (id: string) => {
    const { data } = await httpService.get(userEndPoint + id);
    return data;
  },
};

export default userService;

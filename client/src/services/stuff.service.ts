import httpService from "./http.service";

const stuffEndPoint = "product/";

const stuffService = {
  fetchAll: async () => {
    const { data } = await httpService.get(stuffEndPoint);
    return data;
  },

  create: async (payload: any) => {
    const { data } = await httpService.post(stuffEndPoint, payload);
    return data;
  },

  update: async (payload: { _id: string; email: string; password: string }) => {
    const { data } = await httpService.patch(
      stuffEndPoint + payload._id,
      payload
    );
    return data;
  },

  delete: async (productId: string) => {
    const { data } = await httpService.delete(stuffEndPoint + productId);
    return data;
  },
};

export default stuffService;

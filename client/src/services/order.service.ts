import httpService from "./httpService";

const orderEndPoint = "order/";

const ordersService = {
  create: async (payload: any) => {
    const { data } = await httpService.post(orderEndPoint, payload);
    return data;
  },

  fetchAll: async () => {
    const { data } = await httpService.get(orderEndPoint);
    return data;
  },
};

export default ordersService;

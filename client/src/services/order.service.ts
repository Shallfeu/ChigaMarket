import httpService from "./http.service";

const orderEndPoint = "order/";

const ordersService = {
  create: async (payload: any) => {
    const { data } = await httpService.post(orderEndPoint, payload);
    return data;
  },

  fetchAll: async (userId?: string) => {
    const { data } = userId
      ? await httpService.get(orderEndPoint, {
          params: {
            orderBy: "userId",
            equalTo: `${userId}`,
          },
        })
      : await httpService.get(orderEndPoint);
    return data;
  },
};

export default ordersService;

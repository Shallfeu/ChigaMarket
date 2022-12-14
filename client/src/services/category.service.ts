import httpService from "./http.service";

const categoryEndPoint = "category/";

const stuffService = {
  fetchAll: async () => {
    const { data } = await httpService.get(categoryEndPoint);
    return data;
  },

  create: async (payload: { category: string; subcategory: string }) => {
    const { data } = await httpService.post(categoryEndPoint, payload);
    return data;
  },

  delete: async (payload: { category: string; subcategories: any }) => {
    const { data } = await httpService.patch(categoryEndPoint, payload);
    return data;
  },
};

export default stuffService;

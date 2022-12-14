import httpService from "./http.service";

const fileEndPoint = "file/";

const fileService = {
  uploadAvatar: async (payload: any) => {
    const { data } = await httpService.post(`${fileEndPoint}avatar`, payload);
    return data;
  },

  deleteAvatar: async () => {
    const { data } = await httpService.delete(`${fileEndPoint}avatar`);
    return data;
  },

  uploadProductImg: async (payload: any) => {
    const { data } = await httpService.post(`${fileEndPoint}product`, payload);
    return data;
  },

  deleteProductImg: async () => {
    const { data } = await httpService.delete(`${fileEndPoint}product`);
    return data;
  },
};

export default fileService;

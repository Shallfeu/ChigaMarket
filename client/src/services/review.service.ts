import httpService from "./http.service";

const reviewEndPoint = "review/";

const reviewsService = {
  create: async (payload: {
    pageId: string;
    content: string;
    userId: string;
  }) => {
    const { data } = await httpService.post(reviewEndPoint, payload);
    return data;
  },

  fetchAll: async (pageId: string) => {
    const { data } = pageId
      ? await httpService.get(reviewEndPoint, {
          params: {
            orderBy: "pageId",
            equalTo: `${pageId}`,
          },
        })
      : await httpService.get(reviewEndPoint);
    return data;
  },

  remove: async (reviewId: string) => {
    const { data } = await httpService.delete(reviewEndPoint + reviewId);
    return data;
  },
};

export default reviewsService;

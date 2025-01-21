import api from "./base";

export const getCommentApi = async (MaCongViec:number) => {
    try {
      const response = await api.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`);
      return response.data.content;
    } catch (error: any) {
      throw error.response;
    }
  };

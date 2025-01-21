import api from "./base";

export const jobdetailApi = async (MaChiTietLoai:any) => {
    try {
      const response = await api.get(`/cong-viec/lay-cong-viec-chi-tiet/${MaChiTietLoai}`);
      return response.data.content;
    } catch (error: any) {
      throw error.response;
    }
  };

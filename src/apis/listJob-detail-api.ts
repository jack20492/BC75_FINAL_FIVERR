import api from "./base";

export const listjobdetailApi = async (MaChiTietLoai:number) => {
    try {
      const response = await api.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${MaChiTietLoai}`);
      return response.data.content;
    } catch (error: any) {
      throw error.response;
    }
  };

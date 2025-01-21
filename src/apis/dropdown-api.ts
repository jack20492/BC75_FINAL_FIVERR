import api from "./base";

export const dropdownApi = async (MaLoaiCongViec:number) => {
    try {
      const response = await api.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`);
      return response.data.content;
    } catch (error: any) {
      throw error.response;
    }
  };

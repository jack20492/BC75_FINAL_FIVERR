import api from "./base";

export const searchApi = async (TenCongViec: string) => {
  try {
    const response = await api.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${TenCongViec}`
    );
    return response.data.content;
  } catch (error: any) {
    throw error.response;
  }
};

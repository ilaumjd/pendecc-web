import { API_BASE_URL } from "@/utils/config";

export const useFetchUrl = (short_url) => {
  const fetchUrl = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/urls/${short_url}`, {
        method: "GET",
      });

      const data = await response.json();

      if (data.defaultUrl) {
        return { success: true, data };
      } else {
        return { success: false, error: "URL not found" };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return { fetchUrl };
};

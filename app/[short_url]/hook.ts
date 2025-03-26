import { API_BASE_URL } from "../constants";

export type FetchUrlResponse = {
  success?: boolean;
  data?: {
    defaultUrl: string;
    shortUrl: string;
  };
  error?: string;
};

export const useFetchUrl = (short_url: string) => {
  const fetchUrl = async (): Promise<FetchUrlResponse> => {
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
      return { success: false, error: (err as Error).message };
    }
  };

  return { fetchUrl };
};

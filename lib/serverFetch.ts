import { auth } from "@/app/configs/auth";

const serverFetch = async (url: string, method: "GET" | "POST" | "DEL", body?: any) => {
  const session = await auth();

  const access_token = session?.accessToken;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const options = {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};
export const server = {
  get: async (url: string) => serverFetch(url, "GET"),
  post: async (url: string, body: any) => serverFetch(url, "POST", body),
  del: async (url: string) => serverFetch(url, "DEL"),
};

import axios from "axios";

const API_KEY = "edUjolleuj9Qc2XkbCdQrELiS5eKuNwu";

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${API_KEY}`,
});

const apiClient = {
  loadRestaurants(): Promise<any> {
    return client.get("/restaurants").then((response) => response.data);
  },
};

export default apiClient;

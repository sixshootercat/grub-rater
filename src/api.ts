import axios from "axios";

const client = axios.create({
  baseURL: `https://outside-in-dev-api.herokuapp.com/${process.env.API_KEY}`,
});

const apiClient = {
  loadRestaurants(): Promise<any> {
    return client.get("/restaurants").then((response) => response.data);
  },
};

export default apiClient;

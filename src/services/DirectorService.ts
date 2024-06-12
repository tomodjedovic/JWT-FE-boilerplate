import apiService, { ApiService } from "./ApiService";
import { AxiosInstance } from "axios";

class DirectorService {
  private apiService: ApiService;
  private client: AxiosInstance;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.client = apiService.api;
  }

  getAllDirectors = async () => {
    const response = await this.client.get("/directors");
    console.log("log iz servisa", response);

    return response.data.data;
  };

  getSingleDirector = async (payload: any) => {
    const response = await this.client.get(`/directors/${payload}`);
    console.log("log iz servisa", response);
    return response.data;
  };
}

const directorService = new DirectorService(apiService);
export default directorService;

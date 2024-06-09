import { actionChannel } from "redux-saga/effects";
import apiService, { ApiService } from "./ApiService";
import { AxiosInstance } from "axios";
import { Movie } from "../types/backend";

class MovieService {
  private apiService: ApiService;
  private client: AxiosInstance;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.client = apiService.api;
  }
  getAllMovies = async () => {
    const response = await this.client.get("/movies");

    return response.data.data;
  };

  getSingleMovie = async (payload: any) => {
    console.log("dfd", payload);
    const response = await this.client.get(`/movies/${payload}`);
    console.log("log iz servisa", response);
    return response.data;
  };

  deleteMovie = async (payload: number) => {
    const response = await this.client.delete(`/movies/${payload}`);
  };
  createMovie = async (payload: Movie) => {};
}

const movieService = new MovieService(apiService);
export default movieService;

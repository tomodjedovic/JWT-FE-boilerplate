import { actionChannel } from "redux-saga/effects";
import apiService, { ApiService } from "./ApiService";
import { AxiosInstance } from "axios";

class MovieService{
  private apiService: ApiService;
  private client: AxiosInstance;

constructor(apiService: ApiService){
    this.apiService = apiService;
    this.client = apiService.api;
}
getAllMovies = async ()=> {
    const response = await this.client.get("/movies");
    return response.data;
}

getSingleMovie = async (payload:any) => {
    const response = await this.client.get(`/movies/${payload}`);
    return response;

}

deleteMovie = async (payload: any) => {
    const response = await this.client.delete(`/movies${payload}`)
}
createMovie = async (payload:any) => {

}
}
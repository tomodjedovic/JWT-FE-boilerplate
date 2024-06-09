import { QueryMethod } from "@testing-library/react";

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Creator {
  id: number;
  name: string;
}
interface Director {
  id: number;
  name: any;
  surname: any;
}

interface Movie {
  id: number;
  title: string;
  release_date: string;
  user_score: number;
  description: string;
  image: string;
  trailer: string;
  duration: string;
  creator_id: number;
  director_id: number;
  genres: Genre[];
  creator: Creator;
  director: Director;
}

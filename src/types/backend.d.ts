import { QueryMethod } from "@testing-library/react";
import { JsxElement } from "typescript";

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
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
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  creator: {
    id: number;
    name: string;
  };
  director: {
    id: number;
    name: string;
    surname: string;
  };
}

import axios from "axios";

export const jwtAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});


export interface JobObj {
    id?: string;
    title: string,
    description: string,
    department?:  string,
    salary: number,
    userId?: string,
    applications?: any[]
}

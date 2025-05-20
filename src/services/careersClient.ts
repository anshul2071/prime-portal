import axiosInstance from "./axiosInstance";
import type { Job, NewJobInput } from "@/types";


export const fetchJobs = async():Promise<Job[]> => {
    const {data} = await axiosInstance.get<Job[]>('/careers');
    return data;

};


export const postJob = async(
    job:NewJobInput

): Promise<Job> =>{
    const {data} = await axiosInstance.post<Job>('/careers', job);
    return data;
};
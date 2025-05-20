import { useState, useEffect } from "react";
import  {fetchJobs} from '../services/careersClient'
import type { Job } from "../types";


export interface UseJobsResult {
    jobs: Job[];
    loading: boolean;
    error: string | null;
}




const useJobs = (): UseJobsResult => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const[error, setError] = useState<string | null>(null);


    useEffect(() => {
        setLoading(true);
        fetchJobs()
             .then((data) => setJobs(data))
             .catch((err) => setError(err.message))
             .finally(() => setLoading(false));

    }, [])


    return {
        jobs,
        loading,
        error
    };
}

export default useJobs;
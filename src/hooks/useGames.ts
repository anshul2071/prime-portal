import { useState, useEffect } from "react";
import { fetchGames } from "@/services/gamesClient";

import type {Game} from '../types';


export interface UseGamesResult {
    games: Game[];
    loading: boolean;
    error: string | null;

}



const useGames = (): UseGamesResult => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetchGames()
             .then((data) => setGames(data))
             .catch((err) => setError(err.message))
             .finally(() => setLoading(false));
    }, [])


    return {
        games,
        loading,
        error
    };
};

export default useGames;
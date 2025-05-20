import axiosInstance from "./axiosInstance";

import type{Game} from '../types'
import type { NewGameInput } from "../types";
export const fetchGames = async(): Promise<Game[]> =>{
    const {data} = await axiosInstance.get<Game[]>('/game');
    return data;
};

export const postGame = async(
    game: NewGameInput
    ): Promise<Game> => {
        const {data} = await axiosInstance.post<Game>('/game', game);
        return data;
    }

import axios from "axios";

const http = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'b7b1165414msh8e97fee96b5fcf7p1a21a5jsnfe2a883521ca',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
});

export class FreeToGameApiService {
    getCardInfo() {
        return http.get(`/api/games`);
    }
}

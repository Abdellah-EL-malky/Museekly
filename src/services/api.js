import axios from 'axios';

// Base URL de l'API lyrics.ovh
const lyricsApi = axios.create({
    baseURL: 'https://api.lyrics.ovh/v1/',
    timeout: 10000
});

// API pour la recherche de chansons
const searchApi = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/',
    timeout: 10000
});

export default {
    // Rechercher des chansons
    searchSongs(query) {
        return searchApi.get('/track.search', {
            params: {
                q_track_artist: query,
                page_size: 10,
                page: 1,
                s_track_rating: 'desc'
            }
        });
    },

    // Obtenir les paroles d'une chanson
    async getLyrics(artist, title) {
        try {
            const response = await lyricsApi.get(`/${artist}/${title}`);
            return response;
        } catch (error) {
            // Essayer une source alternative si la première échoue
            try {
                const altResponse = await axios.get(`https://api.alternative-lyrics.com/${artist}/${title}`);
                return altResponse;
            } catch (altError) {
                throw error; // Si les deux échouent, propager l'erreur
            }
        }
    }

};
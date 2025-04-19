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
    getLyrics(artist, title) {
        return lyricsApi.get(`/${artist}/${title}`);
    }
};
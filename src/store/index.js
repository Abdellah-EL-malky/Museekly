import { createStore } from 'vuex';
import api from '@/services/api';

export default createStore({
    state: {
        searchResults: [],
        currentSong: null,
        lyrics: '',
        loading: false,
        error: null
    },
    mutations: {
        SET_SEARCH_RESULTS(state, results) {
            state.searchResults = results;
        },
        SET_CURRENT_SONG(state, song) {
            state.currentSong = song;
        },
        SET_LYRICS(state, lyrics) {
            state.lyrics = lyrics;
        },
        SET_LOADING(state, status) {
            state.loading = status;
        },
        SET_ERROR(state, error) {
            state.error = error;
        }
    },
    actions: {
        async searchSongs({ commit }, query) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);

            try {
                const response = await api.searchSongs(query);
                // Adapter selon l'API utilisée
                const formattedResults = response.data.message.body.track_list.map(item => ({
                    id: item.track.track_id,
                    title: item.track.track_name,
                    artist: {
                        name: item.track.artist_name,
                        id: item.track.artist_id
                    },
                    album: {
                        title: item.track.album_name,
                        id: item.track.album_id
                    }
                }));
                commit('SET_SEARCH_RESULTS', formattedResults);
            } catch (error) {
                console.error('Error searching songs:', error);
                commit('SET_ERROR', 'Erreur lors de la recherche. Veuillez réessayer.');
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async getLyrics({ commit }, { artist, title }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);

            try {
                const response = await api.getLyrics(artist, title);
                commit('SET_LYRICS', response.data.lyrics || 'Paroles non disponibles');
            } catch (error) {
                console.error('Error fetching lyrics:', error);
                commit('SET_ERROR', 'Impossible de récupérer les paroles. Veuillez réessayer.');
            } finally {
                commit('SET_LOADING', false);
            }
        }
    }
});
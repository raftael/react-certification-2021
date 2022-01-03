import videoSearch from '../mocks/videosSearchMock';
import videoDetail from '../mocks/videoDetailMock';
import { URL_API_YOUTUBE, FAVORITE_STORAGE_KEY } from '../constants';
import { APIKEY } from '../../config';
import storage from '../storage';

const YoutubeService = {
  devSearch: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const videos = videoSearch.items;
        const filteredItems = videos.filter((item) => !!item.id.videoId);
        resolve(filteredItems);
      }, 500);
    });
  },
  search: async (query) => {
    const url = `${URL_API_YOUTUBE}search?part=snippet&q=${query}&maxResults=30&type=video&key=${APIKEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  },
  devGetVideoInfo: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const video = videoDetail.items[0];
        resolve(video);
      }, 300);
    });
  },
  getVideoInfo: async (videoId) => {
    const url = `${URL_API_YOUTUBE}videos?part=snippet&contentDetails&statistics&id=${videoId}&key=${APIKEY}`;
    const response = await fetch(url);
    const video = await response.json();
    return video.items[0];
  },
  getRelatedVideos: async (videoId) => {
    const url = `${URL_API_YOUTUBE}search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${APIKEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const filteredItems = data.items.filter((item) => !!item.snippet);
    return filteredItems;
  },
  getFavoriteVideos: async (favoriteVideosId) => {
    const url = `${URL_API_YOUTUBE}videos?part=snippet&contentDetails&statistics&id=${favoriteVideosId}&key=${APIKEY}`;
    const response = await fetch(url);
    const video = await response.json();
    return video.items;
  },
  getFavoriteRelatedVideos: async (videoId) => {
    let favoritesIds = storage.get(FAVORITE_STORAGE_KEY);
    const existKey = Boolean(favoritesIds);
    if (existKey) {
      favoritesIds = favoritesIds.filter((id) => id !== videoId);
    }
    const url = `${URL_API_YOUTUBE}videos?part=snippet&contentDetails&statistics&id=${favoritesIds}&key=${APIKEY}`;
    const response = await fetch(url);
    const video = await response.json();
    return video.items;
  },
  devGetFavoriteVideos: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const videos = videoSearch.items;
        const filteredItems = videos.filter((item) => !!item.id.videoId);
        resolve(filteredItems);
      }, 500);
    });
  },
  updateFavorites: (videoId) => {
    return new Promise((resolve) => {
      let favoritesKey = storage.get(FAVORITE_STORAGE_KEY);
      const existKey = Boolean(favoritesKey);
      if (!existKey) {
        const favorites = [];
        favorites.push(videoId);
        storage.set(FAVORITE_STORAGE_KEY, favorites);
      } else {
        const existElement = favoritesKey.includes(videoId);
        if (existElement) {
          favoritesKey = favoritesKey.filter((id) => id !== videoId);
        } else {
          favoritesKey.push(videoId);
        }
        storage.set(FAVORITE_STORAGE_KEY, favoritesKey);
      }
      resolve();
    });
  },
  getFavorite: (videoId) => {
    let response = false;
    const favoritesKey = storage.get(FAVORITE_STORAGE_KEY);
    const existKey = Boolean(favoritesKey);
    if (existKey) {
      const existElement = favoritesKey.includes(videoId);
      if (existElement) {
        response = true;
      }
    }
    return response;
  },
};

export default YoutubeService;

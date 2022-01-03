import videoSearch from '../mocks/videosSearchMock';
import videoDetail from '../mocks/videoDetailMock';
import { URL_API_YOUTUBE } from '../constants';
import { APIKEY } from '../../config';

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
};

export default YoutubeService;

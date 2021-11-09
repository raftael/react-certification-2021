import { useState, useEffect } from 'react';

const API_URL =
  'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

function useYoutube() {
  const [videosList, setVideosList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getVideos() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setVideosList(result.items);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }

    getVideos();
  }, []);

  return { videosList, errorMessage };
}

export default useYoutube;

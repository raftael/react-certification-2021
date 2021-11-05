import React, { useEffect, useRef, useState } from 'react';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setVideosList(result.items);
      },
      (error) => {
        setIsLoaded(true);
        console.log(error)
      }
    )
  }, [])

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      <ul>
        {videosList.map(video => (
          <li key={video.etag}> 
            {video.snippet.title}
            
          </li>
        ))}
        </ul>
    </section>
  );
}

export default HomePage;

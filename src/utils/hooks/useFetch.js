import { useState, useEffect } from 'react';

const useFetch = (endpoint, query = 'wizeline') => {
  const [data, setData] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    endpoint(query)
      .then((response) => {
        setData({
          loading: false,
          data: response,
          error: null,
        });
      })
      .catch((error) => {
        setData({
          loading: false,
          data: null,
          error,
        });
      });
  }, [endpoint, query]);
  return data;
};

export default useFetch;

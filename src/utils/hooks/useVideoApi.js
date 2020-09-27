import { useEffect, useState } from 'react';
import { VideoAPI } from '../apis';

const useVideoAPI = (method, arg) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    VideoAPI[method](arg).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [method, arg]);

  return { isLoading, data };
};

export default useVideoAPI;

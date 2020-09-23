import { useState, useEffect } from 'react';

import { YOUTUBE_API_KEY } from '../../utils/constants';

async function getSearchResults(searchTerm) {
  console.log(`ExecutingSearch with: ${searchTerm}`);

  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&q=${searchTerm}&maxResults=10&type=video`;

  const data = await fetch(url);
  const jsonData = await data.json();

  return jsonData;
}

async function getVideoDetails(videoId) {
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,player&id=${videoId}`;

  const data = await fetch(url);
  const jsonData = await data.json();

  return jsonData;
}

async function getRelatedVideos(videoId) {
  console.log('Getting related videos');
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`;

  const data = await fetch(url);
  const jsonData = await data.json();

  return jsonData;
}

const APICatalog = {
  searchVideos: getSearchResults,
  getVideoDetails,
  getRelatedVideos,
};

const useVideoAPI = (method, arg) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    APICatalog[method](arg).then((response) => {
      setData(response);
      setIsLoading(false);
    });
  }, [method, arg]);

  return { isLoading, data };
};

export default useVideoAPI;

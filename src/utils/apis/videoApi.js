import { YOUTUBE_API_KEY } from '../constants';

async function executeRequest(url) {
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData;
}

async function searchVideos(searchTerm) {
  console.log(`ExecutingSearch with: ${searchTerm}`);
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&q=${searchTerm}&maxResults=10&type=video`;
  return executeRequest(url);
}

async function getVideoDetails(videoId) {
  const url = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,player&id=${videoId}`;
  return executeRequest(url);
}

async function getRelatedVideos(videoId) {
  console.log('Getting related videos', videoId);
  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`;
  return executeRequest(url);
}

const VideoAPI = {
  searchVideos,
  getVideoDetails,
  getRelatedVideos,
};

export default VideoAPI;

import React from 'react';
import { useParams } from 'react-router-dom';
import useVideoAPI from '../../providers/Video';

import VideoDisplay from '../../components/VideoDisplay.component';

import CardList from '../../components/Card/CardList.component';

function VideoPage() {
  const { id } = useParams();
  console.log('Video id: ', id);
  const { isLoading, data } = useVideoAPI('getVideoDetails', id);
  const relatedVideos = useVideoAPI('getRelatedVideos', id);

  console.log('Video page: ', relatedVideos.data);

  return (
    <div>
      {!isLoading && <VideoDisplay video={data.items[0]} />}
      {!relatedVideos.isLoading && (
        <CardList isLoading={isLoading} data={relatedVideos.data} />
      )}
    </div>
  );
}

export default VideoPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useVideoAPI } from '../../utils/hooks';

import { VideoDisplay, VideoList } from '../../components/Video';
import Container, { Part, Divider } from '../../components/Layout';

function VideoPage() {
  const { id } = useParams();
  const videoDetails = useVideoAPI('getVideoDetails', id);
  const relatedVideos = useVideoAPI('getRelatedVideos', id);

  return (
    <Container direction="row">
      <Part bg="6" md="10">
        <VideoDisplay isLoading={videoDetails.isLoading} data={videoDetails.data} />
      </Part>
      <Part bg="5" md="10">
        <Divider />
        <h2>Related Videos</h2>
        <VideoList
          isLoading={relatedVideos.isLoading}
          data={relatedVideos.data}
          direction="vertical"
        />
      </Part>
    </Container>
  );
}

export default VideoPage;

import React from 'react';
import styled from 'styled-components';

import withLoader from '../Loader.component';

const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  @media (min-width: 1280px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  flex-grow: 1;
`;

function VideoDisplay({ data }) {
  const videoId = data.items[0].id;
  const { title } = data.items[0].snippet;

  return (
    <VideoContainer>
      <VideoFrame
        // width="640"
        // height="400"
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h2>{title}</h2>
    </VideoContainer>
  );
}

export default withLoader(VideoDisplay);

import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function VideoDisplay({ video }) {
  return (
    <VideoContainer>
      <iframe
        width="640"
        height="400"
        title={video.id}
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default VideoDisplay;

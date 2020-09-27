import React from 'react';
import styled from 'styled-components';

import withLoader from '../Loader';
import { FavoriteToggle } from '../Favorites';
import Container, { Divider } from '../Layout';

const VideoFrame = styled.iframe`
  width: 100%;
  flex-grow: 1;
  height: 600px;
`;

function VideoDisplay({ data }) {
  const videoId = data.items[0].id;
  const { title } = data.items[0].snippet;

  return (
    <Container direction="column">
      <VideoFrame
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h2>{title}</h2>
      <Divider />
      <Container direction="column" align="flex-end">
        <FavoriteToggle id={videoId} />
      </Container>
      <Divider />
    </Container>
  );
}

export default withLoader(VideoDisplay);

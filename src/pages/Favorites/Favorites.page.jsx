import React from 'react';

import { useVideoAPI } from '../../utils/hooks';
import { useFavorites } from '../../providers/Favorites';

import Container, { Divider, Part } from '../../components/Layout';
import { VideoList } from '../../components/Video';

function FavoritesPage() {
  const { favorites } = useFavorites();
  const { isLoading, data } = useVideoAPI('getVideoDetails', favorites.join());

  return (
    <Container direction="column">
      <h1>My Favorites</h1>
      <Divider />
      <Part bg="10" md="11">
        <VideoList isLoading={isLoading} data={data} direction="horizontal" />
      </Part>
    </Container>
  );
}

export default FavoritesPage;

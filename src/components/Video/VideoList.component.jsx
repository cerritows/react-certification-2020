import React from 'react';
import { Link } from 'react-router-dom';

import { CardList, Card, CardHeader, CardFooter, CardBody, CardContent } from '../Card';
import { FavoriteToggle } from '../Favorites';
import htmlEntities from '../../utils/entities';
import withLoader from '../Loader';

function VideoList({ data, direction }) {
  return (
    <CardList direction={direction}>
      {data.items.map((element) => {
        const videoId = element.id.videoId || element.id;
        return (
          <Card element={element} key={videoId}>
            <CardBody>
              <Link to={`/video/${videoId}`}>
                <CardContent>
                  <img src={element.snippet.thumbnails.high.url} alt="Video preview" />
                  <CardHeader>{htmlEntities.decode(element.snippet.title)}</CardHeader>
                </CardContent>
              </Link>
              <CardFooter>
                <FavoriteToggle id={videoId} />
              </CardFooter>
            </CardBody>
          </Card>
        );
      })}
    </CardList>
  );
}

export default withLoader(VideoList);

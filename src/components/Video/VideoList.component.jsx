import React from 'react';
import { Link } from 'react-router-dom';

import { CardList, Card, CardHeader, CardFooter, CardBody, CardContent } from '../Card';
import LikeHandler from '../LikeHandler.component';
import htmlEntities from '../../utils/entities';
import withLoader from '../Loader.component';

function VideoList({ data, direction }) {
  return (
    <CardList direction={direction}>
      {data.items.map((element) => {
        const videoId = element.id.videoId || element.id;
        return (
          <Card element={element} key={videoId}>
            <CardBody>
              <CardContent>
                <Link to={`/video/${videoId}`}>
                  <img src={element.snippet.thumbnails.high.url} alt="Video preview" />
                </Link>
                <CardHeader>{htmlEntities.decode(element.snippet.title)}</CardHeader>
              </CardContent>
              <CardFooter>
                <LikeHandler id={videoId} />
              </CardFooter>
            </CardBody>
          </Card>
        );
      })}
    </CardList>
  );
}

export default withLoader(VideoList);

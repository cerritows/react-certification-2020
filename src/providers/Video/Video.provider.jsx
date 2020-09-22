import { useState, useEffect } from 'react';

import { YOUTUBE_API_KEY } from '../../utils/constants';

async function getSearchResults(searchTerms) {
  console.log('ExecutingSearch"');

  // const data = {
  //   kind: 'youtube#searchListResponse',
  //   etag: 'K5zaiIK3KMrDeVgmbupgF9NPRxo',
  //   nextPageToken: 'CAoQAA',
  //   regionCode: 'MX',
  //   pageInfo: {
  //     totalResults: 1000000,
  //     resultsPerPage: 10,
  //   },
  //   items: [
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'scbgQ_06C3ykE7rwVqK4accWJvc',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'gdZLi9oWNZg',
  //       },
  //       snippet: {
  //         publishedAt: '2020-08-21T03:58:10Z',
  //         channelId: 'UC3IZKseVpdzPSBaWxBxundA',
  //         title: 'BTS (방탄소년단) &#39;Dynamite&#39; Official MV',
  //         description:
  //           "BTS (방탄소년단) 'Dynamite' Official MV Credits: Director: Yong Seok Choi (Lumpens) Assistant Director: Jihye Yoon (Lumpens) Director of Photography: ...",
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/gdZLi9oWNZg/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/gdZLi9oWNZg/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'Big Hit Labels',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-08-21T03:58:10Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: '9hhz_Z5wC0kZX5GuEoYLHQqZYFg',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'gFYAXsa7pe8',
  //       },
  //       snippet: {
  //         publishedAt: '2020-09-21T13:00:11Z',
  //         channelId: 'UC4eYXhJI4-7wSWc8UNRwD4A',
  //         title: 'BTS: Tiny Desk (Home) Concert',
  //         description:
  //           "The Tiny Desk is working from home for the foreseeable future. Introducing NPR Music's Tiny Desk (home) concerts, bringing you performances from across the ...",
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/gFYAXsa7pe8/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/gFYAXsa7pe8/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/gFYAXsa7pe8/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'NPR Music',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-09-21T13:00:11Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'PZF0zcm9MYBNGPXofcZ6iZtrKXE',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'CslrQbWW_8k',
  //       },
  //       snippet: {
  //         publishedAt: '2020-09-21T11:00:07Z',
  //         channelId: 'UCLkAepWjdylmXSltofFvsYQ',
  //         title: 'BTS (방탄소년단) Special Announcement | Fortnite x BTS',
  //         description:
  //           'Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit http://twitter.com/BTS_twt http://www.facebook.com/bangtan.official ...',
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/CslrQbWW_8k/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/CslrQbWW_8k/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/CslrQbWW_8k/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'BANGTANTV',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-09-21T11:00:07Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'YO39VgOCUZ9dDvyj7Y0XV_hyg6U',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'zJCdkOpU90g',
  //       },
  //       snippet: {
  //         publishedAt: '2020-08-31T00:52:29Z',
  //         channelId: 'UCxAICW_LdkfFYwTqTHHE0vg',
  //         title: 'BTS Performs &quot;Dynamite&quot; | 2020 MTV VMAs',
  //         description:
  //           'BTS performs "Dynamite" at the 2020 Video Music Awards. Check out more from the 2020 VMAs here: http://www.mtv.com/vma #VMAs #MTV Subscribe to MTV: ...',
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/zJCdkOpU90g/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/zJCdkOpU90g/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/zJCdkOpU90g/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'MTV',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-08-31T00:52:29Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'ZNVrzAssfIcoJTPxwRT1RnOqV0Y',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'v1g67HDxd4w',
  //       },
  //       snippet: {
  //         publishedAt: '2020-09-19T03:59:44Z',
  //         channelId: 'UCBMNwslJp7YjvMydpGknxgw',
  //         title: 'BTS iheartradio music festival full ver',
  //         description: '',
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/v1g67HDxd4w/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/v1g67HDxd4w/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/v1g67HDxd4w/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'DAL COM',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-09-19T03:59:44Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: '4aNyK5T_v4BQlP09dxcsXl0YLIQ',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: '9IHwqdz8Xhw',
  //       },
  //       snippet: {
  //         publishedAt: '2020-06-26T08:59:11Z',
  //         channelId: 'UC3IZKseVpdzPSBaWxBxundA',
  //         title: 'BTS (방탄소년단) &#39;Stay Gold&#39; Official MV',
  //         description:
  //           'BTS (방탄소년단) \'Stay Gold\' Official MV Credits: Written by UTA Written by SUNNY BOY Written by Melanie Joy Fontana Written by Michel "Lindgren" Schulz ...',
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/9IHwqdz8Xhw/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/9IHwqdz8Xhw/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/9IHwqdz8Xhw/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'Big Hit Labels',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-06-26T08:59:11Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'cKX0lQLoiujB5uUNu7yPUXS06K4',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'XsX3ATc3FbA',
  //       },
  //       snippet: {
  //         publishedAt: '2019-04-12T09:00:02Z',
  //         channelId: 'UC3IZKseVpdzPSBaWxBxundA',
  //         title:
  //           'BTS (방탄소년단) &#39;작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)&#39; Official MV',
  //         description:
  //           "BTS (방탄소년단) '작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)' Official MV Credits: Director : YongSeok Choi (Lumpens) Assistant Director : Guzza, Jihye ...",
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/XsX3ATc3FbA/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/XsX3ATc3FbA/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/XsX3ATc3FbA/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'Big Hit Labels',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2019-04-12T09:00:02Z',
  //       },
  //     },
  //     {
  //       kind: 'youtube#searchResult',
  //       etag: 'yHlba8aM5Wj1FY_Qzffv_dSSxes',
  //       id: {
  //         kind: 'youtube#video',
  //         videoId: 'I3igok9jQIo',
  //       },
  //       snippet: {
  //         publishedAt: '2020-09-04T01:00:11Z',
  //         channelId: 'UCq4isO8ZYOZfmvGJ-_1UdIA',
  //         title: 'BTS – “Dynamite”  (Live) | Press Play',
  //         description:
  //           'On Aug. 21, record-breaking K-pop superstars BTS achieved a new first, when they dropped their first English-language song, "Dynamite." For the latest episode ...',
  //         thumbnails: {
  //           default: {
  //             url: 'https://i.ytimg.com/vi/I3igok9jQIo/default.jpg',
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: 'https://i.ytimg.com/vi/I3igok9jQIo/mqdefault.jpg',
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: 'https://i.ytimg.com/vi/I3igok9jQIo/hqdefault.jpg',
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: 'Recording Academy / GRAMMYs',
  //         liveBroadcastContent: 'none',
  //         publishTime: '2020-09-04T01:00:11Z',
  //       },
  //     },
  //   ],
  // };

  const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&q=${searchTerms}&maxResults=10`;

  const data = await fetch(url);
  return data;
}

const useVideoSearch = (searchTerms) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    getSearchResults(searchTerms).then((response) => {
      setSearchResults(response);
      setIsLoading(false);
    });
  }, [searchTerms]);

  return { isLoading, searchResults };
};

export default useVideoSearch;

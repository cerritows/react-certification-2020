import React, { useState } from 'react';
import SearchBar from '../../components/Search';
import { useVideoAPI } from '../../utils/hooks';

import { VideoList } from '../../components/Video';
import Container, { Part } from '../../components/Layout';

function HomePage() {
  const [searchTerms, setSearchTerms] = useState('');

  const { isLoading, data } = useVideoAPI('searchVideos', searchTerms);

  return (
    <Container align="center" direction="column">
      <Part align="center" bg="8" md="10">
        <SearchBar setSearchTerms={setSearchTerms} />
      </Part>
      <Part align="center" bg="8" md="10">
        <VideoList isLoading={isLoading} data={data} direction="horizontal" />
      </Part>
    </Container>
  );
}

// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
// import './Home.styles.css';

// function HomePage() {
//   const history = useHistory();
//   const sectionRef = useRef(null);
//   const { authenticated, logout } = useAuth();

//   function deAuthenticate(event) {
//     event.preventDefault();
//     logout();
//     history.push('/');
//   }

//   return (
//     <section className="homepage" ref={sectionRef}>
//       <h1>Hello stranger!</h1>
//       {authenticated ? (
//         <>
//           <h2>Good to have you back</h2>
//           <span>
//             <Link to="/" onClick={deAuthenticate}>
//               ← logout
//             </Link>
//             <span className="separator" />
//             <Link to="/secret">show me something cool →</Link>
//           </span>
//         </>
//       ) : (
//         <Link to="/login">let me in →</Link>
//       )}
//     </section>
//   );
// }

export default HomePage;

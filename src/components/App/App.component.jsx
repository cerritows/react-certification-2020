import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../../pages/Home';
import NavBar from '../NavBar/NavBar.component';
import NavBarItem from '../NavBar/NavBarItem.component';

import VideoPage from '../../pages/Video/Video.page';

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <NavBarItem>
          <Link to="/login">Log in</Link>
        </NavBarItem>
      </NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video/:id" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

// import AuthProvider from '../../providers/Auth';
// import HomePage from '../../pages/Home';
// import LoginPage from '../../pages/Login';
// import NotFound from '../../pages/NotFound';
// import SecretPage from '../../pages/Secret';
// import Private from '../Private';
// import Fortune from '../Fortune';
// import Layout from '../Layout';
// import { random } from '../../utils/fns';

// function App() {
//   useLayoutEffect(() => {
//     const { body } = document;

//     function rotateBackground() {
//       const xPercent = random(100);
//       const yPercent = random(100);
//       body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
//     }

//     const intervalId = setInterval(rotateBackground, 3000);
//     body.addEventListener('click', rotateBackground);

//     return () => {
//       clearInterval(intervalId);
//       body.removeEventListener('click', rotateBackground);
//     };
//   }, []);

//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Layout>
//           <Switch>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route exact path="/login">
//               <LoginPage />
//             </Route>
//             <Private exact path="/secret">
//               <SecretPage />
//             </Private>
//             <Route path="*">
//               <NotFound />
//             </Route>
//           </Switch>
//           <Fortune />
//         </Layout>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

export default App;

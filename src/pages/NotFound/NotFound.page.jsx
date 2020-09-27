import React from 'react';
import { Link } from 'react-router-dom';
import { FilledButton } from '../../components/Button';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <Link to="/" className="home-link">
        <FilledButton>Home</FilledButton>
      </Link>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;

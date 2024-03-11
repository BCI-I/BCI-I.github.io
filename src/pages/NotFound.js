// NotFoundPage.js
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    // Redirect to the modified URL with '#' before the pathname
    history.replace(`#/${location.pathname}`);
  }, [history, location.pathname]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find the page you're looking for.</p>
    </div>
  );
};

export default NotFoundPage;

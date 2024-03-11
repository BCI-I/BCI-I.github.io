// NotFoundPage.js
import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    // Redirect to the modified URL with '#' before the pathname
    window.location.replace(`#${window.location.pathname}`);
  }, []);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find the page you're looking for.</p>
    </div>
  );
};

export default NotFoundPage;

import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import SiteLoader from './components/SiteLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SiteLoader />;
  }

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;

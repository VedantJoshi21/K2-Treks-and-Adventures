import React from 'react';

export default function SiteLoader() {
  return (
    <div className="site-loader-shell" aria-label="Loading website" role="status">
      <div className="loader" aria-hidden="true" />
    </div>
  );
}

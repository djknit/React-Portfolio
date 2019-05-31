import React from 'react';
// import './style.css';

function footerLink({
  url,
  children
}) {

  return (
    <a
      href={url}
      class="btn btn-secondary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default footerLink;
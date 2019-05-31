import React from 'react';
import './style.css';

function techList({ list }) {
  return (
    <ul>
      {list.map(listItem => (
        <li>
          <a
            href={listItem.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {listItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default techList;
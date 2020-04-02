import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <p>&copy; Gatsby Starter New Age 2019. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href={props.facebookurl}>Facebook</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Twitter</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Bababa</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

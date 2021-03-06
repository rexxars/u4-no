import React from 'react';

const Figure = ({ asset, caption, license, licensor }) => (
  <figure className="c-article__figure c-longform-grid__full">
    <img className="c-article__figure-img" src={asset.url} alt={asset.altText} />
    <figcaption className="c-article__figure-figcaption">
      {caption}
      {license}
      {licensor}
    </figcaption>
  </figure>
);

export default Figure;

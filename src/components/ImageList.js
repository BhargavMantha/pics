import './ImageList.css';
import React from 'react';

const ImageList = ({ images }) => {
  const imagesWithTag = images.map(
    ({ urls: { full, description, id } }, index) => (
      <img src={full} key={index} alt={description} />
    )
  );
  return <div className="image-list">{imagesWithTag}</div>;
};

export default ImageList;

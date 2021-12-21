import './ImageList.css';
import React from 'react';
import { ImageCard } from './ImageCard';
const ImageList = ({ images }) => {
  const imagesWithTag = images.map((image, index) => (
    <ImageCard key={index} image={image} />
  ));
  return <div className="image-list">{imagesWithTag}</div>;
};

export default ImageList;

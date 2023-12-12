"use client"
import React, {useEffect, useState} from 'react';

interface ImageListProps {
  images: string[]
}

const imageListContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const arrowButtonStyle: React.CSSProperties = {};

const imageWrapperStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const imageItemStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  maxWidth: '400px',
  margin: '0 10px',
};
const DogsListView: React.FC<ImageListProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(images.map((imageSrc) => new Promise((resolve) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
      })));
      setLoaded(true);
    };
    (async () => {
      await preloadImages();
      setLoaded(true);
    })();
  }, [images]);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };
  const getIndicesToRender = () => {
    if (!loaded) return [];
    const indices: number[] = [];
    for (let i = currentIndex - 12; i <= currentIndex + 12; i++) {
      const index = (i + images.length) % images.length;
      if (index >= 0 && index < images.length) {
        indices.push(index);
      }
    }
    return indices;
  };

  const chunkArray = (array: number[], size: number) => {
    const result: number[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const renderImages = () => {
    const indicesToRender = getIndicesToRender();
    const chunkedIndices = chunkArray(indicesToRender, 5);
    return chunkedIndices.map((row, rowIndex) => (
      <div key={rowIndex} className="image-row">
        {row.map((index) => (
          <img
            key={index}
            src={images[index]}
            alt={`Image ${index + 1}`}
            className={`image-item ${index === currentIndex ? 'center-image' : ''}`}
            style={{ width: '100px', height: '100px' }}
          />
        ))}
      </div>
    ));
  };
  return (
    <div className="image-list" style={imageListContainerStyle}>
      <button onClick={goToPrevious} style={arrowButtonStyle}>
        &lt;
      </button>
      <div style={imageWrapperStyle}>{renderImages()}</div>
      <button onClick={goToNext} className="arrow-button">
        &gt;
      </button>

    </div>
  );
};

export default DogsListView;

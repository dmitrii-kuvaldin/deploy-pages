
// SkeuomorphicSlider.tsx
import React, { useState } from 'react';
import styles from './SkeuomorphicSlider.module.css';

interface SkeuomorphicSliderProps {
  images: string[];
}

const SkeuomorphicSlider: React.FC<SkeuomorphicSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        <button className={styles.prevButton} onClick={prevSlide}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SkeuomorphicSlider;

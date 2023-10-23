// CardGrid.tsx
import React from 'react';
import styles from './CardGrid.module.css';
import SkeuomorphicCard from '../SkeuomorphicCard/SkeuomorphicCard';

interface CardGridProps {
  cards: {
    title: string;
    content: string;
    imageUrl: string;
  }[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => (
        <SkeuomorphicCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;

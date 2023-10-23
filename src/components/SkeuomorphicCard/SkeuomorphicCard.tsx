// SkeuomorphicCard.tsx
import React from 'react';
import styles from './SkeuomorphicCard.module.css';

interface SkeuomorphicCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const SkeuomorphicCard: React.FC<SkeuomorphicCardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.background}></div>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default SkeuomorphicCard;

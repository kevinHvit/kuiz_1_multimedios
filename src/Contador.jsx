import React, { useState } from 'react';
import './styles.css'; // Archivo CSS para estilos personalizados

function LikeDislikeCounter() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
    

  };

  const decrementLikes = () => {
    setLikes(likes - 1);
  };

  const incrementDislikes = () => {
    setDislikes(dislikes + 1);
  };

  const decrementDislikes = () => {
    setDislikes(dislikes - 1);
  };

  return (
    <div className="like-dislike-counter">
      <div className="likes">
        <span className="counter">{likes}</span>
        <button className="like-button" onClick={incrementLikes}>
          Like
        </button>
      </div>
      <div className="dislikes">
        <span className="counter">{dislikes}</span>
        <button className="dislike-button" onClick={incrementDislikes}>
          Dislike
        </button>
      </div>
    </div>
  );
}

export default LikeDislikeCounter;

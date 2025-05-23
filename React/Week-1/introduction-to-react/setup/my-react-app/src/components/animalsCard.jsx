<<<<<<< HEAD
import React from 'react';
import '../css/animalCard.css'

 const animalCard = ({ title, image }) => {  // Define a functional component called Card that takes props
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '200px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px'
  };

  return (
    <div className='cardStyle'>
      <img src={image} alt={title} className='imageStyle' />
      <h3>{title}</h3>
    </div>
  );
};

=======
import React from 'react';
import '../css/animalCard.css'

 const animalCard = ({ title, image }) => {  // Define a functional component called Card that takes props
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '200px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px'
  };

  return (
    <div className='cardStyle'>
      <img src={image} alt={title} className='imageStyle' />
      <h3>{title}</h3>
    </div>
  );
};

>>>>>>> origin/main
export default animalCard;
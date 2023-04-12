import React from 'react';

// import { Container } from './styles';

const Card: React.FC = (item: any) => {
  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h3>{item.description}</h3>
      <p>{item.category}</p>
      <p>{item.price}</p>
      <p>{item.website}</p>
    </div>
  )
}

export default Card;

// API do buscapé offline, as respostas foram baseadas na api do mercadolivre

// After searching the list of products that will appear on the screen with: Photo, description, category, price and website where the information was obtained

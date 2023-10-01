import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose your styles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/vietnamCore.jpg'
              text='Go for traditional takes on vietnamese cuisine'
              label='Viet'
              path='/Category1'
            />
            <CardItem
              src='images/japanCore.jpg'
              text='A cultural but still mordern food wildy accepted around the world'
              label='Japan'
              path='/Category2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/italyCore.jpg'
              text='hungry for al dente pasta'
              label='Italy'
              path='/Category3'
            />
            <CardItem
              src='images/indianCore.jpg'
              text='Where spices are kings'
              label='India'
              path='/Category4'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

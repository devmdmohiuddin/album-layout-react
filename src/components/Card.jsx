import React from 'react';
import Faker from 'faker';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card__img" src={Faker.image.people()} alt="img" />
        <div className="cards">
          <h1 className="card__heading">Heading</h1>
          <p className="card__pera">
            This is a media card. You can use this section to describe the
            content.
          </p>
          <div className="card__link">
            <a className="card__link--1" href="#">
              view
            </a>
            <a className="card__link--2" href="#">
              edit
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

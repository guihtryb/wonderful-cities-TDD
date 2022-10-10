import React, { useContext } from 'react';
import context from '../../context/Context';
import Title from '../Title/Title';
import './CitiesPopulation.css';

export default function CitiesPopulation() {
  const { city } = useContext(context);

  const getDotHouses = (numToString) => {
    let counter = 0;
    const dotHouses = [];

    for (let index = numToString.length; index > 0; index -= 1) {
      if (counter % 3 === 0 && counter !== 0) {
        dotHouses.push(index);
      }
      counter += 1;
    }

    return dotHouses.sort();
  };

  const formatInhabitantsNumber = (inhabitants = 0) => {
    const inhabitantsNum = inhabitants.toString();

    let inhabitantsNumFormated = '';

    const dotHouses = getDotHouses(inhabitantsNum);

    for (let index = 0; index < inhabitantsNum.length; index += 1) {
      if (dotHouses.includes(index)) {
        inhabitantsNumFormated += `.${inhabitantsNum[index]}`;
      } else {
        inhabitantsNumFormated += inhabitantsNum[index];
      }
    }

    return inhabitantsNumFormated;
  };

  return (
    <section
      data-testid="population-section"
      className="grid-section population"
      id="population"
    >
      <Title title="Population" />
      <div className="grid-numbers">
        <h3
          data-aos="fade-right"
          data-aos-duration="1050"
          className="city-name-subtitle"
          data-testid="population-number"
        >
          {' '}
          { formatInhabitantsNumber(city.population) }
          {' '}
          Inhabitants.
        </h3>
      </div>
    </section>
  );
}

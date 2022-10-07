import React, { useContext } from 'react';
import context from '../../context/Context';
import './CityIntroParagraphs.css';

export default function CityIntroParagraphs() {
  const { city } = useContext(context);
  return (
    <>
      <p
        data-testid="introduction-paragraph-1"
        className="introduction-paragraph"
      >
        { city.cityIntro1 }
      </p>
      <p
        data-testid="introduction-paragraph-2"
        className="introduction-paragraph"
      >
        { city.cityIntro2 }
      </p>
    </>
  );
}

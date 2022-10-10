import React, { useContext } from 'react';
import './CitiesFaq.css';
import Title from '../Title/Title';
import DefinitionList from '../DefinitionList/DefinitionList';
import context from '../../context/Context';

export default function CitiesFaq() {
  const { city } = useContext(context);

  return city && (
    <section
      className="grid-section faq"
      id="faq"
      data-testid="faq-section"
    >
      <Title title="faq" />
      <DefinitionList list={city.faq} />
    </section>
  );
}

import React from 'react';
import PropTypes, { shape } from 'prop-types';
import DefinitionListItem from '../DefinitionListItem/DefinitionListItem';

export default function DefinitionList({ list }) {
  return list && (
    <dl className="definition-list" data-testid="definition-list">
      {
        list.map(({ title, answer }) => (
          <DefinitionListItem key={answer} title={title} answer={answer} />
        ))
      }
    </dl>
  );
}

DefinitionList.propTypes = {
  list: PropTypes.arrayOf(shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })),
};

DefinitionList.defaultProps = {
  list: [],
};
